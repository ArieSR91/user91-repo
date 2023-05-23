# user91-repo
Wellcome to my repository 
## Add Metaverse Repo
apt install wget gnupg


Debian based:
```
echo "deb [arch=all] https://ariesr91.github.io/user91-repo/kali metaverse main non-free contribe" | sudo tee /etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null
```
Termux:
```
echo "deb [arch=all] https://ariesr91.github.io/user91-repo/termux metaverse main root axiomatic" | tee $PREFIX/etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | tee $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null
```
