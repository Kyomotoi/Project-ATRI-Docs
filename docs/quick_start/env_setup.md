# 环境初始化

上文我们提到：`为了让 ATRI 稳定运行，我们使用了虚拟环境（Poetry）`。

## 初始化

在 **ATRI 项目根目录**下键入：
```shell
poetry install
```

等待其运行完成后，键入：
```shell
poetry shell
```
以进入虚拟环境。

是否进入虚拟环境？当控制台左侧出现**类似** `(atri-py3.9)` 的信息，即表明你已进入 ATRI 专属的虚拟环境，例如：
```shell
(atri-py3.9) PS E:\develop\ATRI>
```

::: warning
每次启动前，请先检查是否进入虚拟环境，如无，请先进入虚拟环境再运行 ATRI。
:::
