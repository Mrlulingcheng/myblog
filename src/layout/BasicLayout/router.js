/**
 * 基本路由配置
 */

import {
    UserOutlined,
    HddOutlined,
    TeamOutlined,
    TagsOutlined,
    ReadOutlined,
} from "@ant-design/icons";

import User from '@/pages/User'
import Article from '@/pages/Article'

const routers = [{
        name: "用户管理",
        icon: UserOutlined,
        path: "/user",
        exact: true,
        main: User
    }, {
        name: "文章管理",
        icon: ReadOutlined,
        path: "/article",
        exact: true,
        main: Article
    }
    // , {
    //     name: "标签管理",
    //     icon: TagsOutlined,
    //     path: "",
    //     exact: true,
    //     main: ""
    // }, {
    //     name: "分类管理",
    //     icon: HddOutlined,
    //     path: "/classify",
    //     exact: true,
    //     main: ""
    // }, {
    //     name: "友链管理",
    //     icon: TeamOutlined,
    //     path: "/friends",
    //     exact: true,
    //     main: ""
    // }
]


export default routers