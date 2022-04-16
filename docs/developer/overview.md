# 开发 - 贡献

## 贡献

---

### 提交 Issue

提交之前，请先**浏览被 close 的 Issue**，因为该 Issue **很可能已经解决**，或者，浏览已有的 Issues

接下来，我们将 Issue 分为以下几类，分别包含其所需提供的额外说明:

> 标明 "*" 为必须提供

- **功能需求**
    - 描述*
    - 想要解决的方案*
    - 操作环境* （包括 Python 版本，操作系统及其配置）
    - 备用方案
    - 相关代码
    - 其它说明
- **问题询问**
    - 描述*
    - 其它说明
- **报告漏洞/bug**
    - 描述*（包括可能的触发方式，以方便进行复现）
    - 操作环境*（包括 Python 版本，当前正在运行的项目版本，操作系统及其配置）
    - 可能的解决方案
    - 其它说明
    > 如果有能力，推荐提交 Pull request，你的pr是对本项目的最大的帮助w

### 提交 Pull Request

**代码规范**

1. 所提交的代码尽量与原仓库代码风格保持一致
2. 遵循 [PEP8](https://www.python.org/dev/peps/pep-0008/) 规范
3. 变量名清晰明了，可以提供适当注释

**Commit 规范**

1. 请确保你的每一个 commit 都有明确的意图，描述动作短小精练，尽量分 commit 表达意图
2. commit 遵守 [gitmoji](https://gitmoji.dev/) 规范，可以参考以往的提交

**其它说明**

如果你的pr类型是**新增功能**，请务必完成以下几点:

1. 遵守以上两项规范
2. 在本文档相关栏目添加对应说明
3. 包含测试用例，格式按照现有的进行编写
4. 不涉及**任何可能存在的违反当地法律的行为**

### 在群聊(Tencent QQ Group)中进行反馈

rbq这边请～[传送门](https://jq.qq.com/?_wv=1027&k=WoAAYXbJ)

交流过程中，你需要知道:

1. 该平台所处地区是**中国**，请务必遵守相关法律法规，不要讨论不该讨论的话题
2. 交流过程中，请确保你的表达言简意赅
3. 如某人因某一言论/事件引发你不满，还请勿与其在群内对线，善用**屏蔽**
4. 群内不允许一切形式的**侵犯他人隐私**的行为，如有必要，会将内容报告当地相关部门
5. 群内不允许一切**过于暴露**的nsfw内容，如果你觉得有必要，请通过邮件发给我，我不介意的！
6. **勿谈国事，勿倒垃圾**

---

## 开发

首先，你最好先了解 [NoneBot2](https://github.com/nonebot/nonebot2) 的运作方式，或者你已经熟练掌握了 NoneBot2 的插件编写，并且具有一定的 Python 编程经验

如果你已经克隆了源码仓库，并且需要深入研究代码，下面是设置开发环境的指南

由于每个人所使用的 IDE 不同，因此本项目并不包含专一的 IDE 环境设置文件，以下使用 `vscode` 作为示范

### 为 IDE 设置自动格式化

详细可参考这篇指南: [传送门](https://black.readthedocs.io/en/stable/integrations/index.html)

### 为 IDE 设置代码风格检测（可选）

在 `vscode` 中，有这样一个插件: `pylance`。以下是它的介绍:
<details markdown='1'><summary>Click me</summary>
Fast, feature-rich language support for Python<br>
Pylance is an extension that works alongside Python in Visual Studio Code to provide performant language support. Under the hood, Pylance is powered by Pyright, Microsoft's static type checking tool. Using Pyright, Pylance has the ability to supercharge your Python IntelliSense experience with rich type information, helping you write better code faster.<br>

Pylance is the default language support for Python in Visual Studio Code and is shipped as part of that extension as an optional dependency.
</details>

> 当然，这是可选的，因为不同的开发者所使用的 IDE 不同，不会要求为了开发本项目就强制要求安装 `vscode` 并安排此插件

除此之外，你还可以选择: [flask8](https://flake8.pycqa.org/en/latest/)

---

## 文档

文档使用 [MkDocs](https://github.com/mkdocs/mkdocs/) 生成

主题为 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)

本文档的仓库地址: [传送门](https://github.com/Kyomotoi/Project-ATRI-Docs)

关于提交 Pull Request: [同上文](#pull-request)

### 设置环境

首先确保你的 Python 版本 > 3.7.1

```shell
pip install mkdocs
```

### 文档结构

```
.
├── README.md  用于仓库的描述文件
├── docs  文档目录
│   ├── about.md  关于本项目的介绍，同项目仓库大致一致
│   ├── changelog.md  变更日志，同项目仓库大致一致
│   ├── index.md  文档主页
│   ├── assets  文档用到的资源
│   │   └── ...
│   ├── developer  开发者文档
│   │   └── ...
│   ├── install  安装指南
│   │   └── ...
│   └── user  用户相关
│       ├── service-xxx.md  相关服务说明
│       └── ...
└── mkdocs.yml  文档的主要配置文件
```

### 文档预览

```shell
mkdocs serve
```
