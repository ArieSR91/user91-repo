[![pages-build-deployment](https://github.com/ArieSR91/user91-repo/actions/workflows/pages/pages-build-deployment/badge.svg?branch=xenoverse)](https://github.com/ArieSR91/user91-repo/actions/workflows/pages/pages-build-deployment)
# user91-repo
Wellcome to my repository.

Before add the repository you must to install gnupg
```
apt install wget gnupg dialog -y
```
## Manual Install
Debian based:
```
. /etc/os-release;echo "deb https://ariesr91.github.io/user91-repo/$ID xenoverse main non-free contrib" | sudo tee /etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/xenoverse/user91-repo.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; sudo apt update
```
Termux:
```
mkdir $PREFIX/etc/apt/sources.list.d/; echo "deb https://ariesr91.github.io/user91-repo/termux xenoverse main root" | tee $PREFIX/etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/xenoverse/user91-repo.key | gpg --dearmor | tee $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; apt update
```
## Graphical Install
Debian Based:
```
sudo wget https://raw.githubusercontent.com/ArieSR91/user91-repo/main/user91-repo.sh -O /usr/local/bin/user91-repo;sudo chmod 775 /usr/local/bin/user91-repo; user91-repo menu
```
Termux:
```
wget https://raw.githubusercontent.com/ArieSR91/user91-repo/main/user91-repo.sh -O $PREFIX/bin/user91-repo;chmod 775 $PREFIX/bin/user91-repo; user91-repo menu
```
[Visit](https://ariesr91.github.io/user91-repo/)
## Available packages
#### Debian Based
---
> build-repo (all) \
> box86 (armhf) \
> create-bin (all) \
> ddos (all) \
> download (all) \
> fake-monitor (armhf, arm64) \
> ipgeolocation (all) \
> ngrok-sr (all) \
> repo-manager (all) \
> seeker (all) \
> srcrypt (all) \
> srlocks (all) \
> sr-undercover (all) \
> winebox (armhf, arm64) \
> wine-i386 (armhf) 
---
#### Termux
> adb (arm, aarch64) \
> build-repo (arm, aarch64) \
> download (arm, aarch64) \
> fake-sudo (arm, aarch64) \
> fastboot (arm, aarch64) \
> kali-dark-style (arm, aarch64) \
> kali-icon-theme (arm, aarch64) \
> linuxdeploy (arm, aarch64) \
> proot-distro-kali (arm, aarch64) \
> repo-manager (arm, aarch64) \
> srlocks (arm, aarch64) 
> termux-desktop-lxqt (arm, aarch64) \
> termux-desktop-xfce (arm, aarch64) \
> termux-fonts (arm, aarch64) \
> user91-tools (arm, aarch64) 
---
