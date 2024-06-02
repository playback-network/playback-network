const { exec } = require("child_process");

// Function to execute a command and return the output as a Promise
const execCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
      } else if (stderr) {
        reject(`Stderr: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
};

// Function to check if a PM2 process is running
const isProcessRunning = async (processName) => {
  try {
    const output = await execCommand(`pm2 id ${processName}`);
    return output.trim() !== "[]";
  } catch (error) {
    console.error(`Error checking process: ${error}`);
    return false;
  }
};

// Main function to manage PM2 process
const managePm2Process = async () => {
  try {
    const processName = "blockchain-event-listener";
    const isRunning = await isProcessRunning(processName);

    if (isRunning) {
      console.log(`${processName} is already running. Restarting...`);
      await execCommand(`pm2 restart ${processName}`);
    } else {
      console.log(`${processName} is not running. Starting...`);
      await execCommand("pm2 start ecosystem.config.js");
    }

    // Set up log rotation
    console.log("Setting up log rotation...");
    await execCommand("pm2 install pm2-logrotate");
    await execCommand("pm2 set pm2-logrotate:max_size 20M");
    await execCommand("pm2 set pm2-logrotate:retain 14");

    console.log("PM2 process managed successfully.");
  } catch (error) {
    console.error(`Error managing PM2 process: ${error}`);
  }
};

managePm2Process();
