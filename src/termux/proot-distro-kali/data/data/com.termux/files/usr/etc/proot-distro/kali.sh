# Kali Linux proot-distro by Arie-SR91
DISTRO_NAME="Kali (Rolling)"
DISTRO_COMMENT="Only for arm devices (32 & 64)."

TARBALL_URL['aarch64']="https://github.com/ArieSR91/proot-distro-kali/releases/download/kali-linux64/kali-arm64_1.0.tar.xz"
TARBALL_SHA256['aarch64']="89cf6de9c0e93cbdd08782a9241df7fac01dc47ff39681866a63b093dca1900d"
TARBALL_URL['arm']="https://github.com/ArieSR91/proot-distro-kali/releases/download/kali-linux32/kali-arm_1.0.tar.xz"
TARBALL_SHA256['arm']="b0505d4fa73a9d1c309b6f0ba80c13c8c54f6aa426d585544d6566281020dcfd"

distro_setup() {
	# Don't update udisks2
	run_proot_cmd apt-mark hold udisks2
}
