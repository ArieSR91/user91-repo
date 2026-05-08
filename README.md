[![Deploy static content to Pages](https://github.com/ArieSR91/user91-repo/actions/workflows/static.yml/badge.svg?branch=xenoverse&event=deployment_status)](https://github.com/ArieSR91/user91-repo/actions/workflows/static.yml)
# user91-repo
Wellcome to my repository.

Before add the repository you must to install gnupg
```
apt install wget gnupg dialog -y
```
### Manual Install
Debian based:
```
. /etc/os-release;echo "deb https://ariesr91.github.io/user91-repo/$ID metaverse main non-free contrib" | sudo tee /etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; sudo apt update
```
Termux:
```
mkdir $PREFIX/etc/apt/sources.list.d/; echo "deb https://ariesr91.github.io/user91-repo/termux metaverse universe" | tee $PREFIX/etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | tee $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; apt update
```
### Graphical Install (recommended)
```
wget https://raw.githubusercontent.com/ArieSR91/user91-repo/main/user91-repo.sh -O $PREFIX/bin/user91-repo; chmod 775 $PREFIX/bin/user91-repo; user91-repo -m
```
run: user91-repo -m

[user91-repo](https://ariesr91.github.io/user91-repo/) site\
[Join](https://chat.whatsapp.com/EBnkCoxUasQH87y0EexWL8?mode=ems_copy_t) Whatsapp Channel
## Available packages
#### Debian Based
> build-repo (all) \
box64 (arm64) \
box86 (armhf) \
blesh (all) \
create-bin (all) \
ddos (all) \
fake-monitor (all) \
google-cloud-shell (all) \
hangover-libarm64ecfex (arm64) \
hangover-libwow64fex (arm64) \
hangover-wine (arm64) \
hangover-wowbox64 (arm64) \
ipgeolocation (all) \
kali-colorshceme (all) \
kali-icon-theme (all) \
libosmesa6 (all) \
ngrok-sr (all) \
repo-manager (all) \
seeker (all) \
srcrypt (all) \
srgpt (all) \
srlocks (all) \
srtool (all) \
sr-undercover (all) \
shizuku (all) \
tiktok-download (all) \
winebox (armhf, arm64) \
wine-old (armhf) \
wine-stable (armhf, arm64) \
xfce4-battery-status (all) \
> youtube-download (all)
#### Termux
> aircrack-ng (arm, aarch64) \
build-repo (all) \
fake-sudo (all) \
fonts-firacode (all) \
fonts-hack (all) \
fonts-liberation (all) \
fonts-meslo (all) \
fonts-quicksand (all) \
google-cloud-shell (all) \
kali-colorscheme (all) \
kali-dark-style (all) \
kali-icon-theme (all) \
kali-menu (all) \
libdpkg-perl (all) \
libfile-fcntllock-perl (aarch64) \
libgamefusion-vk-icd (aarch64) \
linuxdeploy (all) \
mesa-vulkan-icd-wrapper (aarch64) \
proot-distro-kali (all) \
repo-manager (all) \
sqlmap (all) \
srtool (all) \
srlocks (all) \
shizuku (all) \
sudo (all) \
termux-desktop-lxqt (all) \
termux-desktop-xfce (all) \
termux-fonts (all) \
termux-user-dirs (all) \
tiktok-download (all) \
> wine-hangover (aarch64) 
