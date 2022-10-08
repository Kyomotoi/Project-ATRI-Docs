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
在任意一控制台下键入:
```shell
pip install poetry
```
> 请确保你的 Python 版本 **>= 3.8.5**

## 部署项目
```shell
poetry install
```
> 国内用户无需担心, 默认源已设为**清华源**<br>
> 国外用户可按需修改: pyproject.toml 中 `[[tool.poetry.source]]` 下的 `default` 改为 `false`
