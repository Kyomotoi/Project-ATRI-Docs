# 部署 ATRI（Installation）

!!! warning
    部署本项目需要一定的电脑基础, 对电脑 (Windows/Linux) 目录结构有一定的了解.

    本教程不会提供太过于**保姆级**的内容, 因为**我不会牺牲打游戏的时间来帮助你**.

    当然, 你也可以选择直接请我喝红茶然后我帮你部署.

在开始之前, 你需要准备以下内容:

- Python >= 3.8.5
- Git

!!! warning
    生产环境强烈建议**海外**, 如果你是**国内用户**, 你可以选择以下便宜的服务商:

    - 腾讯轻量云海外：2c2g 30GB 30M 仅需**32r/m**
    
    对于系统强烈建议：Debian11, Ubuntu20.04

    因为这两个系统均自带 Python3.8+

    国内用户请自行安排梯子并设置代理

## 环境初始化

### 准备 Git

> 如果你不知道这是什么, 善用搜索引擎.

### 拉取项目

在你喜欢的目录下键入:
```shell
git clone https://github.com/Kyomotoi/ATRI.git
```

### 准备所需依赖项

在任意一控制台下键入:
```shell
pip install poetry
```
> 请确保你的 Python 版本 **>= 3.8.5**

### 进入项目专属环境

在项目目录下键入:
```shell
poetry shell
```

### 生成配置文件

> 仅适用于初次启动

在项目目录下键入:
```shell
python main.py
```
