# user91-repo
Wellcome to my repository.

Before add the repository you must to install gnupg
```
apt install wget gnupg dialog -y
```
## Manual Install
Debian based:
```
. /etc/os-release;echo "deb https://ariesr91.github.io/user91-repo/$ID metaverse main non-free contrib" | sudo tee /etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; sudo apt update
```
Termux:
```
mkdir $PREFIX/etc/apt/sources.list.d/; echo "deb https://ariesr91.github.io/user91-repo/termux metaverse main root" | tee $PREFIX/etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | tee $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; apt update
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
![debian](./debian-based.jpg)
#### Termux
![termux](./termux.jpg)
