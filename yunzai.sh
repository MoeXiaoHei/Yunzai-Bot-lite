#!/bin/bash
service ssh start
echo -e "\033[0;96m登录后您可以在QQ发送 #重启 命令使Bot转入后台，进入终端。\033[0m"
cd "/app/Yunzai-Bot" || exit
node app
bash
