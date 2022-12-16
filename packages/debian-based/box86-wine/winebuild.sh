#!/bin/bash
sudo wget https://itai-nelken.github.io/weekly-box86-debs/debian/box86.list -O /etc/apt/sources.list.d/box86.list
wget -qO- https://itai-nelken.github.io/weekly-box86-debs/debian/KEY.gpg | sudo apt-key add -
sudo apt update && sudo apt install box86 -y
wget https://twisteros.com/wine.tgz -O ~/wine.tgz
tar -xzvf ~/wine.tgz
rm ~/wine.tgz
