import React from 'react'
import {
    Menu
} from "antd"
import Icon from "@ant-design/icons";
import {
    Link
} from 'react-router-dom'
class MainMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const routers = this.props.routers

        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                {
                    routers.map((item, index) => {
                        return (
                            <Menu.Item key={index+1}>
                            <Icon component={item.icon}/>
                            <span> {item.name} </span>
                            <Link to={item.path}></Link>
                            </Menu.Item>
                        )
                        
                    })
                }
            </Menu>
        )
    }
}

export default MainMenu