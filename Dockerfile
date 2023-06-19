FROM node:bullseye
VOLUME ["/app"]
RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list && mkdir -p /app
RUN apt-get update && apt-get install -y curl wget vim git cmake redis-server dialog openssh-server ssh vim
RUN apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 \
    libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libgbm-dev libnss3 \
    ca-certificates fonts-liberation lsb-release xdg-utils wget ttf-wqy-zenhei
RUN fc-cache -fv
RUN echo "root:password" | chpasswd  \
    && sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && sed -i 's/^#\(PermitRootLogin.*\)/\1/' /etc/ssh/sshd_config \
    && /etc/init.d/ssh start
EXPOSE 22
WORKDIR /usr/share/
ADD https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz /usr/share/
RUN tar -xf /usr/share/ffmpeg-release-amd64-static.tar.xz \
    && mv /usr/share/ffmpeg-6.0-amd64-static /usr/share/ffmpeg \
    && rm -rf /usr/share/ffmpeg-release-amd64-static.tar.xz \
    && chmod 755 /usr/share/ffmpeg/ffmpeg \
    && chmod 755 /usr/share/ffmpeg/ffprobe \
    && ln -s /usr/share/ffmpeg/ffmpeg /usr/bin/ffmpeg \
    && ln -s /usr/share/ffmpeg/ffprobe /usr/bin/ffprobe \
    && chmod 755 /usr/bin/ffmpeg \
    && chmod 755 /usr/bin/ffprobe
RUN npm install pnpm --registry=https://registry.npm.taobao.org -g
WORKDIR /app
RUN git clone https://github.com/MoeXiaoHei/Yunzai-Bot-lite.git /app/Yunzai-Bot
WORKDIR /app/Yunzai-Bot
RUN pnpm install -P && pnpm add icqq@latest -w
RUN pnpm install --filter=guoba-plugin
EXPOSE 50831
RUN git clone --depth=1 https://gitee.com/ikechan/chatgpt-plugin.git ./plugins/chatgpt-plugin/
WORKDIR /app/Yunzai-Bot/plugins/chatgpt-plugin
RUN pnpm install
WORKDIR /app/Yunzai-Bot
COPY ./yunzai.sh /app/yunzai.sh
ENTRYPOINT [ "/app/yunzai.sh" ]
