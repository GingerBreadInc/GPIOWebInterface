# Installation
All you need is a Raspberry Pi 3/4 and a fresh SD-Card with Raspberry Pi OS Lite 64bit (Bookworm/Trixie) and ssh enabled.

### Automatic Install
1. Download Install Script
```bash
# Bookworm
wget https://raw.githubusercontent.com/GingerBreadInc/GPIOWebInterface/refs/heads/main/install_bookworm.sh

# Trixie
wget https://raw.githubusercontent.com/GingerBreadInc/GPIOWebInterface/refs/heads/main/install_trixie.sh
```
2. Prepare Script
```bash
# Bookworm
chmod +x install_bookworm.sh

# Trixie
chmod +x install_trixie.sh
```
3. Run Script
```bash
# Bookworm
sudo ./install_bookworm.sh

# Trixie
sudo ./install_trixie.sh
```

   
### Manual Install
1. Update System
```bash
sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y
```
2. Expand filesystem to full size of SD-Card
```bash
sudo raspi-config nonint do_expand_rootfs && sudo reboot
```
3. Prepare Installation
```bash
mkdir -p ~/downloads
cd ~/downloads
```
4. Download Components
```bash
wget https://nodejs.org/dist/v24.7.0/node-v24.7.0-linux-arm64.tar.xz
wget https://github.com/GingerBreadInc/GPIOWebInterface/archive/main.zip
```
5. Extract Components
```bash
tar -xvf node-v24.7.0-linux-arm64.tar.xz
unzip main.zip
```
6. (a) Enable Remote GPIO *(only Bookworm and below)*
```bash
sudo systemctl enable pigpiod && sudo systemctl start pigpiod
```
6. (b) Enable Remote GPIO *(only Trixie and up)*
```bash
cd GPIOWebInterface-main
chmod +x enable_rgpio.sh
sudo ./enable_rgpio.sh
cd ..
```
7. Copy Components
```bash
mkdir -p ~/GPIOWebInterface
sudo cp -r ~/downloads/node-v24.7.0-linux-arm64/* /usr/local/
cp -r ~/downloads/GPIOWebInterface-main/* ~/GPIOWebInterface/
cd ..
```
8. Check Node.JS and NPM Version
```bash
node -v
# v24.7.0
npm -v
# 11.5.1
```
9. Prepare GPIO Webinterface
```bash
cd GPIOWebInterface
npm init

# package name: (gpiowebinterface)
# version: (1.0.0)
# description: RaspBerry GPIO WebInterface
# entry point: (webserver.js)
# test command:
# git repository:
# keywords:
# author:
# license: (ISC) MIT
# type: (commonjs)
```
10. Install Modules
```bash
npm install --save-optional utf-8-validate
npm install --save-optional bufferutil
npm install onoff
npm install socket.io --save
```
11. Enable lower Port (<1024) for WebServer
```bash
sudo apt update && sudo apt install libcap2-bin -y && sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
```
12. Create Service
```bash
sudo nano /etc/systemd/system/gpiowebinterface.service

# Replace <User> with yours

[Unit]
Description=GPIO WebInterface
After=network.target
[Service]
ExecStart=node /home/<User>/GPIOWebInterface/webserver.js
WorkingDirectory=/home/<User>/GPIOWebInterface
StandardOutput=inherit
StandardError=inherit
Restart=always
User=<User>
[Install]
WantedBy=multi-user.target
```
13. Enable Service
```bash
sudo systemctl daemon-reload
sudo systemctl start gpiowebinterface.service
sudo systemctl status gpiowebinterface.service
sudo systemctl enable gpiowebinterface.service
```
14. Cleanup
```bash
rm -rf ~/downloads/* && cd ~
```
15. Finally
```bash
sudo reboot
```
### (Optional) ReadOnly Filessystem to protect the SD Card
Enable Read Only Mode
```bash
sudo raspi-config nonint enable_overlayfs && sudo raspi-config nonint enable_bootro && sudo reboot
```
Disable Read Only Mode
```bash
sudo raspi-config nonint disable_overlayfs && sudo reboot

sudo raspi-config nonint disable_bootro && sudo reboot
```
