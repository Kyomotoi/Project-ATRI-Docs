# Hello World!

让我们回到文件目录下含 `main.py` 的地方，键入：
```shell
python main.py
```

!!! WARNING
    通常呢，此处就会有人问:

    Q:为什么我键入后一堆报错呢？<br>
    A:请检查你的`python`命令所指向的版本，`windows`通常指向安装版本，`linux`下通常指向`python2.x`，你可以使用 `python -V` 查看指向版本号。`linux`下请使用 `python3.x` 或确保你的 `python 3.x` 文件位于 `/usr/bin/env` 下。

    Q:为什么启动后控制台一直出现报错，且最后一行为 `ModuleNotFoundError: No module named 'xxx'.`？<br>
    A:请使用`pip`命令以补全所缺依赖，linux下可能为 `pip3`，请使用 `pip -V` 理由同上。

    Q:为什么出现了`远程服务器拒绝链接`等类似报错？<br>
    A:大概率是端口被占用，你可以更改 `config.yml` 中 `BotSelfConfig` 下的 `port` 值（范围10000~60000内随机选一个）。

初次启动需要预载资源文件，可能耗时较长，等待时间取决于你的网络

当控制台出现以下内容:
```shell
ATRI | 02-02 16:32:00 | INFO gocqhttp >> go-cqhttp for (你bot的qq号) has successfully started.
...
ATRI | 02-02 16:32:00 | INFO nonebot >> OneBot V11 | Bot (你bot的qq号) connected
ATRI | 02-02 16:32:00 | INFO gocqhttp >> [(你bot的qq号)] 已连接到反向WebSocket Universal服务器 ws://127.0.0.1:20000/onebot/v11/ws
```

尝试向你的bot发送 `/ping` 后，你 `或许` 会得到如下回应:
```
I'm fine.
```

> 如果你使用的是 `内置 gocqhttp`，你还可以通过键入 `gocq` 以得到bot的运行状态，仅 `超级用户` 可触发

至此，所有准备已完成！你现在拥有了一只活波可爱的ATRI！
