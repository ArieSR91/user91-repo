#!/bin/bash

## Graphical user interface menu
function item_menu_2()
{
    items=(1 "$item1"
           2 "$item2")
    height=9
    gui_menu
}

function item_menu_3()
{
    items=(1 "$item1"
           2 "$item2"
           3 "$item3")
    height=10
    gui_menu
}

function item_menu_4()
{
    items=(1 "$item1"
           2 "$item2"
           3 "$item3"
           4 "$item4")
    height=11
    gui_menu
}

function item_menu_5()
{
    items=(1 "$item1"
           2 "$item2"
           3 "$item3"
           4 "$item4"
           5 "$item5")
    height=12
    gui_menu
}

function item_menu_6()
{
    items=(1 "$item1"
           2 "$item2"
           3 "$item3"
           4 "$item4"
           5 "$item5"
           6 "$item6")
    height=13
    gui_menu
}

function item_menu_7()
{
    items=(1 "$item1"
           2 "$item2"
           3 "$item3"
           4 "$item4"
           5 "$item5"
           6 "$item6"
           7 "$item7")
    height=14
    gui_menu
}

function item_menu_8()
{
    items=(1 "$item1"
           2 "$item2"
           3 "$item3"
           4 "$item4"
           5 "$item5"
           6 "$item6"
           7 "$item7"
           8 "$item8")
    height=15
    gui_menu
}

function gui_menu()
{
    while choice=$(dialog --title "$title" --menu "Please select" $height 50 6 "${items[@]}" 2>&1 >/dev/tty)
        do
        case $choice in
            1)
                $action1
            ;;
            2)
                $action2
            ;;
            3)
                $action3
            ;;
            4)
                $action4
            ;;
            5)
                $action5
            ;;
            6)
                $action6
            ;;
            7)
                $action7
            ;;
            8)
                $action8
            ;;
         esac
    done
    clear
    return 0
}

## Youre script here

function show_help()
{
    echo -e "run:\nbash user91-repo.sh menu"
}

function user91_repo_menu()
{
    title="User91-repo"
    item1="Install user91-repo"
    item2="Uninstall user91-repo"
    item3="About Me"
    item4="Contact Me"
    action1=install_user91_repo
    action2=uninstall_user91_repo
    action3=about_me
    action4=contact_me
    action1=install_user91_repo
    item_menu_4
    exit
}

function install_user91_repo()
{
    title="Install user91-repo"
    item1="Install for Termux"
    item2="Install for Debian based distro"
    item3="Back"
    action1=termux_install
    action2=debian_install
    action3=user91_repo_menu
    item_menu_3
    exit
}

function uninstall_user91_repo()
{
    title="Unnstall user91-repo"
    item1="Uninstall on Termux"
    item2="Uninstall on Debian based distro"
    item3="Back"
    action1=termux_uninstall
    action2=debian_uninstall
    action3=user91_repo_menu
    item_menu_3
    exit
}

function about_me()
{
    clear
    am start -a android.intent.action.VIEW -d https://www.google.com/search?q=Arie-SR91
    sleep 2
    return 0
}

function contact_me()
{
    clear
    am start -a android.intent.action.VIEW -d "https://api.whatsapp.com/send/?phone=%2B6285650868040&text=Hi I have subscribed to user91-repo"
    echo "Select WhatsApp and enter"
    sleep 2
    return 0
}

function termux_install()
{
    clear
    apt install wget gnupg -y
    mkdir $PREFIX/etc/apt/sources.list.d/
    echo "deb https://ariesr91.github.io/user91-repo/termux metaverse main root axiomatic" | tee $PREFIX/etc/apt/sources.list.d/user91-repo.list
    wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | tee $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null
    apt update
    exit
}

function debian_install()
{
    sudo apt install wget gnupg -y
    echo "deb https://ariesr91.github.io/user91-repo/kali metaverse main non-free contrib" | sudo tee /etc/apt/sources.list.d/user91-repo.list
    wget -qO - https://raw.githubusercontent.com/ArieSR91/user91-repo/metaverse/user91-repo.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/user91-repo.gpg > /dev/null
    sudo apt update
}

function termux_uninstall()
{
    rm $PREFIX/etc/apt/sources.list.d/user91-repo.list
    rm $PREFIX/etc/apt/trusted.gpg.d/user91-repo.gpg
}

function debian_uninstall()
{
    sudo rm /etc/apt/sources.list.d/user91-repo.list
    sudo rm /etc/apt/trusted.gpg.d/user91-repo.gpg
}

##

case $1 in
    menu)
        user91_repo_menu
    ;;
    *)
        show_help
    ;;
esac
