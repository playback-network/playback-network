# ec2 event listner


## Install
```
npm i
```

## Start/Stop

```
npm start
```

```
npm stop
```

## Config

Open config.js, change `rpcUrl` `contractAddress` `eventName` and `abi` to listen to events on different contracts/networks.

# Upload to Ubuntu Server

```
tar --exclude='./ec2-galadriel-listener/node_modules' -czvf project.tar.gz ./ec2-galadriel-listener
.

scp -i lightsail-key.pem project.tar.gz ubuntu@13.211.1.75:/home/ubuntu/
```

On ec3

```
tar -xzvf /home/ubuntu/project.tar.gz -C /home/ubuntu/your-deploy-directory

cd ec2-galadriel-listener

npm install

npm start
```

