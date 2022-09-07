echo '
installing packages
'
wget https://github.com/ArieSR91/user91-repo/raw/main/packages/termux/linuxdeploy-manager/linuxdeploy_0.1.0_all.deb
dpkg -i linuxdeploy_0.1.0_all.deb
pkg install pulseaudio -y
echo '
Setting up pulseaudio.
'
if grep -q "anonymous" ~/../usr/etc/pulse/default.pa; then
    echo "module already present"
else
    echo "load-module module-native-protocol-tcp auth-ip-acl=127.0.0.1 auth-anonymous=1" >> ~/../usr/etc/pulse/default.pa
fi
rm linuxdeploy_0.1.0_all.deb
rm install.sh
