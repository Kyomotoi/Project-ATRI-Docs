# 配置本项目（Setting ATRI）

## 注意
!!! warning
    请先运行本项目以获取设置文件.


## 配置预览
打开位于项目根目录的 **config.yml**，你会得到如下列表：
```yaml
# 设置参考文档: https://atri.imki.moe/install/configuration-bot/
ConfigVersion: "1.1.0"

BotConfig:
  host: "127.0.0.1"
  port: 20000
  debug: false
  superusers: ["1234567890"]
  nickname: ["ATRI", "Atri", "atri", "亚托莉", "アトリ"]
  command_start: ["", "/"]
  command_sep: ["."]
  session_expire_timeout: 60
  access_token: ""
  proxy: ""
  request_timeout: 5

WithGoCQHTTP:
  enabled: false
  accounts:
    - uin: 1234567890
      password: ""
      protocol: 5
  
  download_domain: "github.com"
  download_version: "v1.0.0-rc1"

  gocq_webui_username: "ATRI"
  gocq_webui_password: "ATRI1314000***"

SauceNAO:
  key: ""

Setu:
  reverse_proxy: true
  reverse_proxy_domain: "i.pixiv.re"
```

其中:

- ConfigVersion 为设置文件的版本. **请勿更改.**
- [BotConfig](#botconfig) 为本项目机器人主体设置.
- [WithGoCQHTTP](#withgocqhttp) 为gocqhttp相关设置.
- [SauceNAO](#saucenao) 为搜图相关设置.
- [Setu](#setu) 为色图相关设置.

!!! info
    如果你看不懂本设置中的英文词汇，请善用翻译工具.

## 开始配置

### BotConfig

- host: 配置机器人监听的**IP/主机名**. 如果有控制台相关需求, 请改为: `0.0.0.0`
- port: 配置机器人监听的**端口**.
- debug: 配置机器人的**调试模式**. 默认为 `False`.
- superusers: 配置机器人的**超级用户**, 可以设置多个, 用逗号分隔, 即🐧号.
- nickname: 机器人的**昵称**, 可以更改/设置多个, 用逗号分隔.
- command_start: 配置机器人的**命令前缀**, 可以设置多个, 用逗号分隔.
- command_sep: 配置机器人的**命令分隔符**, 可以设置多个, 用逗号分隔.
- session_expire_timeout: 配置机器人的**会话过期时间**, 单位为秒.
- access_token: 配置机器人**同协议端的通信密钥**, 请尽可能地复杂, 且仅允许英文字符. 如不填写, 将无法进入控制台. 示例填写: `access_token: "F$Fdghjbfe3@!gklmkldg%213dfsd!#12sdmDS!"`
- proxy: 配置机器人的**代理* *, 默认为空. 示例填写: `proxy: "http://127.0.0.1:8000"`.
- request_timeout: 机器人请求某一 url **最大等待时间**. 默认为 `5`.

!!! warning
    对于 **proxy**，陆内用户还请自行安排魔法并设置相关内容.
    > 当前已将有关**Jsdelivr**的资源替换为作者本人的反代: jsd.imki.moe

    本项目初始化资源位于**Jsdelivr**，由于某些用户将其用于不法用途，现已被封杀。故陆内用户 `很可能` 无法完全、顺利地拉取所需必要资源.

!!! info
    如果你不是很能理解个别设置，我的建议是：不要动.

### WithGoCQHTTP

- accounts: 配置机器人的**账号**，可以设置多个.
    - demo:
        ```yaml
        accounts:
            - uin: 1234567890
              password: ""
              protocol: 5
            - uin: 1234567891
              password: ""
              protocol: 5
            ...
        ```

        其中**uin**为QQ号，**password**为密码，**protocol**为协议，运行本项目，可选值为 `0`、`1`、`3`，分别对应:

        |值|类型|说明|
        |-|-|-|
        |0|iPad|该设定为默认值，默认 iPad|
        |1|Android Phone|仅支持电脑在线，手机上线会被顶下|
        |2|Android Watch|无法接收 `notify` 事件、无法接收口令红包、无法接收撤回消息|
        |3|Macos|可以手机在线，高贵MacOS，尽显bot的高贵(易炸, 及其不推荐)|
        |4|企点|只能登录企点账号或企点子账号|
        |5|iPad|手机、电脑均可同时在线|

        对于本项目，推荐：`5`

- download_domain:
    - 配置机器人的**下载域名**，默认为 `github.com`. 可选的还有:
        * download.fastgit.org
        * ghdown.obfs.dev

- download_version: 一般情况下我们无需关心. 留空默认为最新.

- gocq_webui_username:
    - 配置内置gocq前端的用户名

- gocq_webui_password:
    - 配置内置gocq前端的密码

!!! warning
    如果你不希望使用本项目内置的 **gocqhttp**, 请确保上报方式为: `array`.

    以下为外置 **gocqhttp** 设置填写参考:
    ```yaml
    servers:
        - ws-reverse:
            universal: "ws://(bot设置中的host:port)/onebot/v11/ws"
            reconnect-interval: 3000
            middlewares:
                <<: *default
                access-token: "(bot设置中的access_token. 访问管理后台必要)"
    ```

!!! info
    如果你是第一次使用go-cqhttp, 可能会遇到以下情况:

    - 登录失败，提示 `请在常用的设备上登录`
    - 密码没有输错, 帐号未被冻结, 但是提示 `密码错误或账号被冻结`

    你可能需要进行以下步骤:
    
    1. 让电脑和手机处在**同一IP**环境下, 比如手机和电脑使用同一个WiFi, 或者电脑连接手机的热点.
    2. 选择**扫码**登入, 不要选**滑块验证**.

    服务器用户同理:

    3. 下载 **windows** 版的 **go-cqhttp* 到自己电脑上.
    4. 按照上面的步骤 1, 2 操作.
    5. 登入成功后把生成的文件拷到服务器上.

### SauceNAO

- key: SauceNAO 搜图的 API 密钥.

!!! info
    如果你是第一次接触此玩意:

    - 进入 [SauceNAO](https://saucenao.com/user.php)用户界面，登录/注册.
    - 在个人信息预览左侧 `Search` 列表中找到 `api`，进入.
    - 在 `api` 界面中找到 Key word: `api key`，其内容即为所需的 API 密钥.


### Setu

- reverse_proxy: 配置是否开启涩图反向代理，默认为 `False`.
- reverse_proxy_domain: 配置涩图反向代理的域名，默认为空. 如上一个配置为 `True`，则此项必须配置.

!!! info
    陆内用户设置了代理的无需理会.

    对于只想用涩图的陆内用户，请继续阅读以下内容.

涩图的来源是 **Pixiv**，其含有图片防盗措施，源址为 `i.pximg.net`，只要 **Referer** 是空值，或者不是来自 **Pixiv** 的请求，则会被拒绝 (`403`).

再一个，涩图api返回的图片 **domain** 为 `pixiv.cat`，现已被列入 **某名单**，陆内用户无法访问.

接下来将针对陆内用户进行教学、部署属于自己的 **Pixiv** 图片反代:

??? example "0w0"
    - 如果你是 **nginx** 用户:
    ```
    proxy_cache_path /path/to/cache levels=1:2 keys_zone=pximg:10m max_size=10g inactive=7d use_temp_path=off;

    server {
        listen 443 ssl http2;

        ssl_certificate /path/to/ssl_certificate.crt;
        ssl_certificate_key /path/to/ssl_certificate.key;

        server_name i.pixiv.cat;
        access_log off;

        location / {
        proxy_cache pximg;
        proxy_pass https://i.pximg.net;
        proxy_cache_revalidate on;
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        proxy_cache_lock on;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_set_header Host i.pximg.net;
        proxy_set_header Referer "https://www.pixiv.net/";

        proxy_cache_valid 200 7d;
        proxy_cache_valid 404 5m;
    }
    }
    ```

    - 如果你是 **CloudFlare** 用户，并且了解 **CloudFlare Worker**:
    ```javascript
    addEventListener("fetch", event => {
    let url = new URL(event.request.url);
    url.hostname = "i.pximg.net";

    let request = new Request(url, event.request);
        event.respondWith(
            fetch(request, {
            headers: {
                'Referer': 'https://www.pixiv.net/',
                'User-Agent': 'Cloudflare Workers'
            }
            })
        );
    });
    ```

    - 如果你啥也不是:
        - 设置为: `True`
        - domain填入: `i.pixiv.re`

## 结束

至此，机器人的配置已全部完成.
