# 主人食用指南

## 说明
主人 是 ATRI 最高权限拥有者，**可以使用一切指令**，且兼顾**维护者**的身份。

## 可操作服务列表
以下列出的为含有**仅主人可触发**的命令的服务。直接点击服务名以跳转到对应页面。

如果**输入对应命令、提供可能的触发信息**后没有反应，可能是当前所在的群聊**禁用**，或者 ATRI 的主人**全局禁用**、又或者如指南首页提到的**代码层面禁用**了该服务。

- [控制台](../service/console.md)
- [管理](../service/manage.md)
- [涩图](../service/setu.md)
- [自定义回复（词库管理）](../service/thesaurus.md)
- [贴贴](../service/auto_tietie.md)
- [广播](../service/broadcast.md)

## 权限说明
权限层次关系：

- 普通用户
- 群管理（包括普通用户权限）
- 主人（包括群管理权限）

## 黑名单说明
ATRI 提供细分到单群、单人的黑名单。详细操作请查阅服务：[管理](../service/manage.md)。

注意，当目标被添加进黑名单后，除非手动移除，期间其将不会被 ATRI 理会。

## 插件管理说明
ATRI 拥有高度的可控插件系统。对插件启用/禁用细分到全局、群、个人。

详细操作请查阅服务：[管理](../service/manage.md)。

## 插件添加/删除说明
::: warning
ATRI 仅允许添加来自 [NoneBot2 Store](https://v2.nonebot.dev/store) 的插件，同时无法卸载 ATRI 自带的插件。如有卸载需求，你可以通过 `全局控制` 以全局禁用该插件。
:::

::: warning
ATRI 不支持通过 nb-cli 控制，即意味着不支持通过 nb-cli 添加、删除来自 [NoneBot2 Store](https://v2.nonebot.dev/store) 的插件。

同时也不支持手动将插件文件移入 `ATRI/plugins` 一类方式添加插件。所有未经过 ATRI Service 注册的插件将不被 ATRI 认可（代码层面禁用）。
:::

::: info
成功添加的插件同样可以进行管理。
:::
如果需要添加来自 [NoneBot2 Store](https://v2.nonebot.dev/store) 的插件：

- 确认启动时收到提示：`NoneBot2 商店刷新成功`。
- 向 ATRI 发送：`添加插件`。
- 收到 `插件名呢?` 后，向其提供插件名，需要提供的插件名格式为 `nonebot-plugin-xxx`。
- 在确认插件信息后，根据提示回复信息方成功添加。
- 插件添加是即时的，即刻生效。

添加插件后需要修改设置？

- 添加插件后会在 ATRI 根目录下生成文件：`nonebot_plugins.json`、`.env.prod`。我们关注后者。
- 前往插件主页查看相关设置，这里假如我们需要用户提交 `XXX_API_KEY`。
- 打开 `.env.prod`，假如已经存在一些配置，我们补充写入 `XXX_API_KEY` 并填上所需信息：
```
XXXXX_LIMIT_TIME=6
XXX_API_KEY=abcdefgABCDEFG1234567890
```
- 填写完毕后，**保存**，并重启 ATRI 方可生效。

卸载插件：

- 向 ATRI 发送：`移除插件`。
- 向其提供插件名，需要提供的插件名格式为 `nonebot-plugin-xxx`。
- 进行最终确认后该插件会被禁用并卸载。
- 注意，卸载插件并不是**即刻生效**的，需要**重启** ATRI 后插件才会真正的被卸载。

## 运行中报错说明
我们将 ATRI 报错类别分为两个层面。

### 信息层面报错
```
呜——出错了...请反馈维护者
来自: kimo
信息: ConnectError
追踪ID: tnAdiL3a
```

解析一下：
- `来自` 为**报错发生所在的插件
- `信息` 为报错的英文简称
- `追踪ID` 如需查看详细错误，可以使用 `追踪` 命令，并提交对应ID，方可查看。

### 控制台层面报错
如控制台出现一堆报错信息，例如：
```
...
  File "*:\***\***\***\***\pypoetry\Cache\virtualenvs\atri-L26pb1nh-py3.9\lib\site-packages\httpx\_transports\default.py", line 77, in map_httpcore_exceptions
    raise mapped_exc(message) from exc
          │          └ 'All connection attempts failed'
          └ <class 'httpx.ConnectError'>

httpx.ConnectError: All connection attempts failed
ATRI | 05-10 03:10:37 | ERROR ATRI >> Error Track ID: tnAdiL3a
```
**请不要慌张**，教你读报错日志：

- 有用信息一般在报错最底端，如上。从下往上数第二行那个即为你当前所能理解的报错最简信息，这里为 `httpx.ConnectError: All connection attempts failed`。此时你可以：
    - 前往[仓库](https://github.com/Kyomotoi/ATRI/issues)提交 Issue。注意，Issue 已有模板，请勿随意改动模板结构。
    - 加入[讨论群](https://jq.qq.com/?_wv=1027&k=WoAAYXbJ)反馈。
- 最后一行所谓的 `Error Track ID` 即为上面 `信息层面报错` 中的 `追踪ID`，按上述方式追踪即可，所返回的信息阅读方式如上条。
