> 此处仅为记录重大更新，修复 BUG/以及其它请关注[`GitHub Commits`](https://github.com/Kyomotoi/ATRI/commits/main)

## Comming soon...

- Next: `YHN-001-A08`

---

## YHN-001-A07

- 新增:
    - 插件: [谁是卷王](user/service-anti_effort.md) [@Kyomotoi](https://github.com/Kyomotoi)
    - 插件: [自定义词库](user/service-thesaurus.md) [@Kyomotoi](https://github.com/Kyomotoi)
- 优化:
    - 部分插件命令提示.


## YHN-001-A06

- 新增:
    - 插件: [B站动态推送](user/service-bilibili_dynamic.md) [@Yuki-Asuuna](https://github.com/Yuki-Asuuna)
    - 插件: [拍立得](user/service-polaroid.md) [@Kyomotoi](https://github.com/Kyomotoi)
    - 插件: [控制台](user/service-console.md) [@Kyomotoi](https://github.com/Kyomotoi)
    - 插件: [Twitter 动态订阅](user/service-twitter.md) [@Kyomotoi](https://github.com/Kyomotoi)
    - 现在可以通过 `poetry` 为本项目创建私有环境.
    - 现在可以通过 `Docker` 部署本项目. [@cvb011](https://github.com/cvb011)
- 修复:
    - 涩图cd准备完成前可以无限触发从而导致协议端内存泄漏、进程卡死.
    - 正常退出程序时线程卡死.
- 优化:
    - 部分代码重构，减少了重复性.
    - 针对token必要性的功能增加了检测.

---

## YHN-001-A05.fix1

- 新增:
    - 插件: [`帮助`](user/service-help.md)
        - 新增本文档地址
    - 插件: [`涩图`](user/service-setu.md)
        - 添加了 `冲后感`
    - `config.yml`:
        - `InlineGoCQHTTP`: `download_version` 用于指定内置 `gocqhttp` 下载、运行版本
- 其它:
    - 更新:
        - 所有需要冷却的插件均换上了 `NoneBot v2.0.0 beta1` 内置的 `Cooldown`<br>（原来的由于未知原因已失效）
        - 优化本项目 `README`
    - 修复:
        - 插件: `老婆`
            - QQ号指向错误
            - 由于**原子性**，后续bug可能会频发，正考虑是否删除
        - 部分插件索取图片相关部分未完全适配 `NoneBot v2.0.0 beta1`
        - 内置 `gocqhttp` 指向版本 `latest` 下载**可能**提示 `404 Not Found`

---

## YHN-001-A05

> 新年快乐！

- 新增:
    - 全面适配 `NoneBot v2.0.0 beta1`
    - 插件: [`broadcast`](user/service-broadcast.md)
        - 现在可以向机器人所在群推送同一消息
    - 插件: [`essential`](user/service-essential.md)
        - 现在可以接受、拒绝撤回消息推送
    - 内置 [`gocqhttp`](https://github.com/mnixry/nonebot-plugin-gocqhttp)
        - 现在可以连同机器人一同启动了
        - 同时包含了可视化gocq控制台
            - 可快捷、快速添加新账号
            - 生产环境资源可视化
    - [单元测试](/test)，加快了机器人开发上线前自检的速度
    - `config.yml` 新增以下内容:
        ```yaml
        InlineGoCQHTTP:
        accounts: # 可多个账号，具体请参考文档
            - uin: 1234567890
            password: ""
            protocol: 3
        
        download_version: "latest"

        Setu:
        reverse_proxy: true # 请参考文档
        reverse_proxy_domain: "i.pixiv.re"
        ```
        - `config` 中 `proxy` 真正意义上生效
- 其它:
    - 移除插件: `cause`
        - 原因: 过于无趣，遭大多用户反对，且源API已失效，不想再替换新的第三方API

---

## YHN-001-A04

- 新增:
    - nsfw检测（主动/被动）又名 `涩图嗅探`
    - 可选代理
- 修复:
    - plugin/chat 在 nb2-a14+ 版本 finish 内为空时会报错
- 其他:
    - 对定时任务进行中文命名
- 移除:
    - 前端界面（赶工而导致成品炸裂）

---

## YHN-001-A03

- 请关注commit: [传送](https://github.com/Kyomotoi/ATRI/commit/be2747e4d4b820ca0f1f988d3b77a628da26fe7b)

---

## 更早记录

> 本项目始于2020年5月，原项目名: `Aya`，后（大概2020年6月）更改为现在的名称

- 请自行查看[`GitHub commits`](https://github.com/Kyomotoi/ATRI/commits/main)
