# scrub API keys from code
import os

def replace_text_in_file(file_path, search_text, replace_text):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = file.read()
    
    new_data = data.replace(search_text, replace_text)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_data)

def replace_text_in_files(directory, search_text, replace_text, file_extensions):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(tuple(file_extensions)):
                file_path = os.path.join(root, file)
                replace_text_in_file(file_path, search_text, replace_text)
                print(f'Replaced text in {file_path}')

if __name__ == "__main__":
    directory = '~/Documents/__HACKFS/MADsubmit/aimodel/'  # Replace with your directory path
    search_text = "AIzaSyAxZdtPLxIJy-aKF5bxbMTnLYgSoCtJXbo"
    replace_text = "REDACTED"
    file_extensions = ['.csv', '.py', '.ipynb']
    
    replace_text_in_files(directory, search_text, replace_text, file_extensions)

