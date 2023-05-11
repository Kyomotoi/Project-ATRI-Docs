# 启动 ATRI

在项目根目录下键入：
```shell
python main.py
```
根据提示填写信息完毕后，ATRI 将自行运行。

初次启动需要预载资源文件，耗时较长，等待时间取决于你的网络质量。

当控制台出现：
```shell
ATRI | 02-02 16:32:00 | INFO gocqhttp >> go-cqhttp for (你bot的🐧号) has successfully started.
...
ATRI | 02-02 16:32:00 | INFO nonebot >> OneBot V11 | Bot (你bot的🐧号) connected
ATRI | 02-02 16:32:00 | INFO gocqhttp >> [(你bot的🐧号)] 已连接到反向WebSocket Universal服务器 ws://127.0.0.1:20000/onebot/v11/ws
```
即代表 ATRI 已成功启动并正常运行。

## 补充

如果你不希望使用内置的 gocqhttp：
- 确保上报方式为：array
- 外置 gocqhttp servers 设置部分参考：
```yml
servers:
    - ws-reverse:
        universal: "ws://(bot设置中的host:port)/onebot/v11/ws"
        reconnect-interval: 3000
        middlewares:
            <<: *default
            access-token: "(bot设置中的access_token. 访问管理后台必要)"
```
