## bashrc by Arie-SR91

shopt -s histappend
shopt -s histverify
export HISTCONTROL=ignoreboth

if [ "$EUID" -eq 0 ]; then
    prompt_color='\[\033[1;34m\]'
    info_color='\[\033[1;91m\]'
    pwd_color='\[\033[0;97m\]'
    prompt_symbol=💀
else
    prompt_color='\[\033[1;92m\]'
    info_color='\[\033[1;34m\]'
    pwd_color='\[\033[0;97m\]'
    prompt_symbol=㉿
fi
clear
PS1=$prompt_color'┌──('$info_color'\u${prompt_symbol}'$info_color'\h'$prompt_color')-['$pwd_color'\w'$prompt_color']\n'$prompt_color'└─'$info_color'\$ '$pwd_color''

alias lo='la -l'
alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'
alias cl='clear'
alias clr='clear'
alias cls='clear && ls'
alias nf='neofetch --ascii_distro $@'
alias cnf='clear && neofetch --ascii_distro $@'

if [ -x /data/data/com.termux/files/usr/libexec/termux/command-not-found ]; then
	command_not_found_handle() {
		/data/data/com.termux/files/usr/libexec/termux/command-not-found "$1"
	}
fi
