sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y
sudo raspi-config nonint do_expand_rootfs
mkdir ~/downloads
cd ~/downloads
wget https://nodejs.org/dist/v24.7.0/node-v24.7.0-linux-arm64.tar.xz
wget https://github.com/GingerBreadInc/GPIOWebInterface/archive/main.zip
tar -xvf node-v24.7.0-linux-arm64.tar.xz
unzip main.zip
rm -f ~/downloads/GPIOWebInterface-main/install_*
sudo systemctl enable pigpiod && sudo systemctl start pigpiod
#cd GPIOWebInterface-main
#chmod +x enable_rgpio.sh
#sudo ./enable_rgpio.sh
#cd ..
mkdir ~/GPIOWebInterface
sudo cp -r ~/downloads/node-v24.7.0-linux-arm64/* /usr/local/
cp -r ~/downloads/GPIOWebInterface-main/* ~/GPIOWebInterface/
cd ..
node -v
# v24.7.0
npm -v
# 11.5.1
echo "###########################################"
echo "# package name: (gpiowebinterface)"
echo "# version: (1.0.0)"
echo "# description: RaspBerry GPIO WebInterface"
echo "# entry point: (webserver.js)"
echo "# test command:"
echo "# git repository:"
echo "# keywords:"
echo "# author:"
echo "# license: (ISC) MIT"
echo "# type: (commonjs)"
echo "###########################################"
cd GPIOWebInterface
npm init
npm install --save-optional utf-8-validate
npm install --save-optional bufferutil
npm install onoff
npm install socket.io --save
sudo apt update && sudo apt install libcap2-bin -y && sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
sudo cat << EOF > /etc/systemd/system/gpiowebinterface.service
# -> Replace <User> with yours! <-
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
EOF

sudo nano /etc/systemd/system/gpiowebinterface.service
sudo systemctl daemon-reload
#sudo systemctl start gpiowebinterface.service
#sudo systemctl status gpiowebinterface.service
sudo systemctl enable gpiowebinterface.service

sudo rm -rf ~/downloads/* && cd ~

sudo reboot
