import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import requests
import os

# Load the CSV file
df = pd.read_csv('apps.csv')

# Initialize Selenium WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in headless mode
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

def get_logo_url(website):
    try:
        driver.get(f"http://{website}")
        # Attempt to find the logo by common selectors
        logo = driver.find_element(By.XPATH, "//img[contains(@alt, 'logo') or contains(@class, 'logo') or contains(@id, 'logo')]")
        logo_url = logo.get_attribute('src')
        return logo_url
    except Exception as e:
        print(f"Failed to retrieve logo for {website}: {e}")
        return None

def save_image(url, path):
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(path, 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            print(f"Image saved: {path}")
        else:
            print(f"Failed to download image from {url}")
    except Exception as e:
        print(f"Error saving image: {e}")

# Loop through the DataFrame and process each website
for index, row in df.iterrows():
    website = row['Website']
    logo_url = get_logo_url(website)
    if logo_url:
        save_image(logo_url, f"{row['index']}.jpg")

# Clean up
driver.quit()
