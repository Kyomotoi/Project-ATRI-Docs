export default {
    lang: 'zh-CN',
    title: 'Project ATRI',
    description: 'Document for ATRI',
    cleanUrls: true,
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {
                text: '入门', items: [
                    { text: '介绍', link: '/quick_start/introduction.md' },
                    { text: '准备工作', link: '/quick_start/preparation.md' },
                    { text: '环境初始化', link: '/quick_start/env_setup.md' },
                    { text: '启动', link: '/quick_start/run.md' },
                    { text: '第一次对话', link: '/quick_start/helloworld.md' },
                    { text: 'Q&A', link: '/quick_start/q_a.md' }
                ]
            },
            {
                text: '指南', items: [
                    { text: '引导', link: '/guide/index.md' },
                    { text: '用户指南', link: '/guide/user.md' },
                    { text: '群管理指南', link: '/guide/admin.md' },
                    { text: '主人指南', link: '/guide/master.md' },
                ]
            },
            {
                text: '服务合集', items: [
                    { text: '谁是卷王', link: '/service/anti_effort.md' },
                    { text: '小程序处理', link: '/service/applet.md' },
                    { text: 'b站动态订阅', link: '/service/bilibili_dynamic.md' },
                    { text: '在线跑代码', link: '/service/code_runner.md' },
                    { text: '控制台', link: '/service/console.md' },
                    { text: '基础部件', link: '/service/essential.md' },
                    { text: '乐', link: '/service/funny.md' },
                    { text: '帮助', link: '/service/help.md' },
                    { text: 'kimo', link: '/service/kimo.md' },
                    { text: '管理', link: '/service/manage.md' },
                    { text: '拍立得', link: '/service/polaroid.md' },
                    { text: 'rss', link: '/service/rss.md' },
                    { text: 'rss.rsshub', link: '/service/rss_rsshub.md' },
                    { text: 'rss.mikan', link: '/service/rss_mikan.md' },
                    { text: '以图搜图', link: '/service/saucenao.md' },
                    { text: '涩图', link: '/service/setu.md' },
                    { text: '词库管理', link: '/service/thesaurus.md' },
                    { text: '推特动态订阅', link: '/service/twitter.md' },
                    { text: '小工具', link: '/service/util.md' },
                    { text: '以图搜番', link: '/service/anime_search.md' },
                    { text: '贴贴', link: '/service/auto_tietie.md' },
                    { text: '广播', link: '/service/broadcast.md' },
                    { text: 'IP查询', link: '/service/geoip.md' },
                    { text: '反馈', link: '/service/repo.md' },
                    { text: '状态', link: '/service/status.md' },
                ]
            },
            {
                text: '设置', link: '/config.md'
            },
            {
                text: '贡献', link: '/contribute/index.md'
            }
        ],
        sidebar: {
            '/quick_start/': [
                {
                    text: '起步',
                    items: [
                        { text: '介绍', link: '/quick_start/introduction.md' }
                    ]
                },
                {
                    text: '开始部署',
                    items: [
                        { text: '准备工作', link: '/quick_start/preparation.md' },
                        { text: '环境初始化', link: '/quick_start/env_setup.md' },
                        { text: '启动', link: '/quick_start/run.md' },
                        { text: '第一次对话', link: '/quick_start/helloworld.md' },
                        { text: 'Q&A', link: '/quick_start/q_a.md' }
                    ]
                }
            ],
            '/service/': [
                {
                    text: '服务合集',
                    items: [
                        { text: '谁是卷王', link: '/service/anti_effort.md' },
                        { text: '小程序处理', link: '/service/applet.md' },
                        { text: 'b站动态订阅', link: '/service/bilibili_dynamic.md' },
                        { text: '在线跑代码', link: '/service/code_runner.md' },
                        { text: '控制台', link: '/service/console.md' },
                        { text: '基础部件', link: '/service/essential.md' },
                        { text: '乐', link: '/service/funny.md' },
                        { text: '帮助', link: '/service/help.md' },
                        { text: 'kimo', link: '/service/kimo.md' },
                        { text: '管理', link: '/service/manage.md' },
                        { text: '拍立得', link: '/service/polaroid.md' },
                        { text: 'rss', link: '/service/rss.md' },
                        { text: 'rss.rsshub', link: '/service/rss_rsshub.md' },
                        { text: 'rss.mikan', link: '/service/rss_mikan.md' },
                        { text: '以图搜图', link: '/service/saucenao.md' },
                        { text: '涩图', link: '/service/setu.md' },
                        { text: '词库管理', link: '/service/thesaurus.md' },
                        { text: '推特动态订阅', link: '/service/twitter.md' },
                        { text: '小工具', link: '/service/util.md' },
                        { text: '以图搜番', link: '/service/anime_search.md' },
                        { text: '贴贴', link: '/service/auto_tietie.md' },
                        { text: '广播', link: '/service/broadcast.md' },
                        { text: 'IP查询', link: '/service/geoip.md' },
                        { text: '反馈', link: '/service/repo.md' },
                        { text: '状态', link: '/service/status.md' },
                    ]
                }
            ]
        },
        socialLinks: [
            {
                icon: 'github', link: 'https://github.com/Kyomotoi/ATRI'
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2020-present <a href="https://www.imki.moe" target=_blank>Kyomotoi</a>'
        }
    }
}