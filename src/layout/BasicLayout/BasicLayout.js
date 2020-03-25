import React from 'react'
import {
    Layout,
    Menu
} from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HddOutlined,
    TeamOutlined,
    TagsOutlined,
    ReadOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import "./BasicLayout.less"
import User from '@/pages/User'
import Article from '@/pages/Article'
const {
    Header,
    Sider,
    Content
} = Layout;


const MENUS = [{
    name: "用户管理",
    link: "/user",
    icon: UserOutlined
}, {
    name: "文章管理",
    link: "/user",
    icon: ReadOutlined
}, {
    name: "标签管理",
    link: "/user",
    icon: TagsOutlined
}, {
    name: "分类管理",
    link: "/user",
    icon: HddOutlined
}, {
    name: "友链管理",
    link: "/user",
    icon: TeamOutlined
}]
class BasicLayout extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const menuBar = MENUS.map((item, i) => {
            return (
                <Menu.Item key={i+1}>
                  <Icon component={item.icon}/>
                  <span> {item.name} </span>
                  <Link to={item.link}></Link>
                </Menu.Item>
            )
        })
        return (
            <Router>
            <Layout>
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  {menuBar}
                    {/* <Menu.Item key="1">
                    <UserOutlined />
                    <span> 用户管理 </span>
                    <Link to="/user"></Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <VideoCameraOutlined />
                    <span> 文章管理 </span>
                    <Link to="/article"></Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <UploadOutlined />
                    <span> 标签管理 </span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <UploadOutlined />
                    <span> 分类管理 </span>
                  </Menu.Item> */}
                </Menu>
              </Sider>
              <Layout className = "site-layout">
                <Header
                  className = "site-layout-background"
                  style={{
                    padding: 0
                  }}
                >
                  {React.createElement(
                    this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: this.toggle
                    }
                  )}
                </Header>
                <Content
                  className = "site-layout-background"
                  style={{margin: "24px 16px", padding: 24,minHeight: 280}}
                >
                  <Route exact path="/user">
                    <User/>
                  </Route>
                  <Route exact path="/article">
                    <Article/>
                  </Route>
                  <Route exact path="/">
                    <User/>
                  </Route>
                </Content>
              </Layout> 
            </Layout>
            
            </Router>
        );
    }
}

export default BasicLayout