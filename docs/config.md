---
layout: doc
title: 配置
---

# ATRI 配置

ATRI 在**初次启动**后会生成 `config.yml`，其为 ATRI 运行配置。后续运行还会生成一个 `.env.prod`，为 nonebot 插件配置。

::: warning
`config.yml` 遵循 YAML 语法，如果你不了解 YAML 语法，你可以在[这篇教程](https://www.runoob.com/w3cnote/yaml-intro.html)中学习。
:::

## 配置详细

打开位于**项目根目录**的 `config.yml`，你会得到如下内容：（此处展示的为示例填写）

::: details
```yaml
# 设置参考文档: https://atri.imki.moe/install/configuration-bot/
ConfigVersion: "1.2.0"

BotConfig:
  host: "127.0.0.1"
  port: 20000
  debug: false
  superusers: ["1145141919"]
  nickname: ["ATRI", "Atri", "atri", "亚托莉", "アトリ"]
  command_start: ["", "/"]
  command_sep: ["."]
  session_expire_timeout: 60
  access_token: ""
  proxy: ""
  request_timeout: 5

WithGoCQHTTP:
  enabled: true
  accounts:
    - uin: 1145141919
      password: "1919810"
      protocol: 5
  
  download_domain: "{download_domain}"
  download_version: "v1.0.0-rc4"

  gocq_webui_username: "ATRI"
  gocq_webui_password: "ATRI1314000***"

SauceNAO:
  key: ""

Setu:
  reverse_proxy: true
  reverse_proxy_domain: "i.pixiv.re"

GeoIP:
  account_id: 0
  license_key: ""
```
:::

其中：
- ConfigVersion 为设置文件版本。**请勿更改**
- [BotConfig](#botconfig) 为 ATRI 主体设置。
- [WithGoCQHTTP](#withgocqhttp) 为内置 gocqhttp 相关设置。
- [SauceNAO](#saucenao) 为以图搜图设置。
- [Setu](#setu) 为涩图相关设置。
- [GeoIP](#geoip) 为IP信息查询相关设置。

## 解析配置

### BotConfig

- host：监听地址/IP。
- port：监听端口，范围推荐 **10000-60000**。
- debug：是否启用调试模式。
- superusers：超级用户，又称为 ATRI 的主人/维护者，可填写多个。
- nickname：ATRI 的昵称，可填写多个。
- command_start：功能命令前缀，可填写多个。
- command_sep：功能命令分隔符，可填写多个。
- session_expire_timeout：功能索要信息超时时间，单位为秒。
- access_token：ATRI 同协议端（例如 gocqhttp）通信时的密钥。
- proxy：ATRI 运行时对外发送请求的代理，格式参考：`proxy: "http://127.0.0.1:8000"`。
- request_timeout：ATRI 运行时对外发送请求的超时时间，单位为秒。

### WithGoCQHTTP

- enabled：是否启用。
- accounts：需要登陆的账号，如不会填写，启用后前往：`http://{host}:{port}/go-cqhttp/` 配置即可。
    - uin：🐧账号。
    - password：登录密码。
    - protocol：登录设备类型。
- download_domain：gocqhttp 下载域名，可选：`github.com`、`download.fastgit.org`、`ghdown.obfs.dev`。
- download_version：gocqhttp 下载版本。
- gocq_webui_username：内置 gocqhttp WebUI 的登录凭证：账号。
- gocq_webui_password：内置 gocqhttp WebUI 的登录凭证：密码。

::: tip
`protocol` 有以下可选：

|值|类型|限制|
|-|-|-|
|0|Default/Unset|当前版本下默认为iPad|
|1|Android Phone|无|
|2|Android Watch|无法接收 notify 事件、无法接收口令红包、无法接收撤回消息|
|3|MacOS|协议较老，易被封号|
|4|企点|只能登录企点账号或企点子账号|
|5|iPad|无|
|6|aPad|无|

这里推荐：`5`
:::

::: tip
此处的 `gocqhttp WebUI` 指的不是 gocqhttp 本体的，而是 [nonebot_plugin_gocqhttp](https://github.com/mnixry/nonebot-plugin-gocqhttp)。

登录地址：`http://{host}:{port}/go-cqhttp/`
:::

::: tip
如果你不希望使用内置的 gocqhttp，请确保上报方式为：`array`

gocqhttp `servers` 配置提示：

```yaml
servers:
    - ws-reverse:
        universal: "ws://(设置中的host:port)/onebot/v11/ws"
        reconnect-interval: 3000
        middlewares:
            <<: *default
            access-token: "(设置中的access_token. 访问管理后台必要)"
```
:::

### SauceNAO

- key：SauceNAO 密钥，前往 [SauceNAO](https://saucenao.com/) 获取。

### Setu

- reverse_proxy：是否启用域名反代。
- reverse_proxy_domain：反代域名。

### GeoIP

- account_id：相关账户ID。
- license_key：相关账户凭证。

GeoIP 所需信息前往 [www.maxmind.com](https://www.maxmind.com/) 获取。
