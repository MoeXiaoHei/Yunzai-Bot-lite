# Yunzai-Bot 轻量版
在听语惊花大佬轻量版云崽v3.0的基础上，加了锅巴插件（已去除相关原神功能），仅供ChatGPT使用

可使用插件库的插件丰富机器人

如插件使用到了原版的genshin文件夹，则相关功能可能无法使用。

Yunzai-Bot插件库：[☞Github](https://github.com/yhArcadia/Yunzai-Bot-plugins-index)/[☞Gitee](https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index)

严禁用于任何商业用途和非法行为

# docker 部署
50832端口时锅巴插件

国内镜像
```shell
docker run -it -p 1022:22 -p 50832:50832 -p 3321:3321 --name yunzai registry.cn-hangzhou.aliyuncs.com/oicq/yunzai-bot-lite:latest
```
国外镜像
```shell
docker run -it -p 1022:22 -p 50832:50832  --name yunzai ovonull/yunzai-bot-lite
```
根据提示操作，退出容器后执行
```shell
docker restart yunzai
```
不带锅巴的镜像

```shell
ovonull/yunzai-bot-lite:lite
```
