import React from 'react'
import {
    Layout,
    // Menu
} from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
// import Icon from "@ant-design/icons";
import {
    Switch
} from 'react-router-dom'
import MainMenu from '@/components/MainMenu'
import routers from './router'
import "./BasicLayout.less"
import User from '@/pages/User'
import Article from '@/pages/Article'
const {
    Header,
    Sider,
    Content
} = Layout;


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
        // const menuBar = MENUS.map((item, i) => {
        //     return (
        //         <Menu.Item key={i+1}>
        //           <Icon component={item.icon}/>
        //           <span> {item.name} </span>
        //           <Link to={item.link}></Link>
        //         </Menu.Item>
        //     )
        // })
        return (
            <Layout>
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <MainMenu routers={routers}/>
                {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  {menuBar}
                </Menu> */}
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
                  <Switch>
                    {this.props.children}
                  </Switch>
                </Content>
              </Layout> 
            </Layout>
        );
    }
}

export default BasicLayout