# user91-repo
Wellcome to my repository 
## Add Metaverse Repo
Before add the repository you must to install gnupg
```
apt install wget gnupg -y
```

Debian based:
```
echo "deb https://ariesr91.github.io/user91-repo/kali metaverse main non-free contribe" | sudo tee /etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; sudo apt update
```
Termux:
```
mkdir $PREFIX/etc/apt/sources.list.d/; echo "deb https://ariesr91.github.io/user91-repo/termux metaverse main root axiomatic" | tee $PREFIX/etc/apt/sources.list.d/user91-repo.list; wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | tee $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null; apt update
```
