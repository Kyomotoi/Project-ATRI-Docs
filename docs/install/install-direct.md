# 直接部署 (Install directly)

> 此方法适用于 Linux & Windows.

## 准备 Git
> 如果你不知道这是什么，善用搜索引擎.

## 拉取项目
在你喜欢的目录下键入:
```shell
git clone https://github.com/Kyomotoi/ATRI.git
```

## 准备所需依赖项
> ATRI 提供了两种选择: 
> - 直接为全局环境安装包
> - 通过 `Poetry` 创建本项目专属运行环境

### 通过全局环境

直接在项目目录下键入:
```shell
pip install -r requirements.txt
```
!!! warning
    Linux 环境下可能是 `pip3`

    执行前请通过 `pip/pip3 -V` 确定其指向的 Python 版本 `>=3.8.5`

### 通过 Poetry

先进行所需工具的安装:
> pip 需求同上
```shell
pip/pip3 install poetry
```

接着:
```shell
poetry install
```
