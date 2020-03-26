import React from 'react'
import {
    useLocation
} from "react-router-dom";
import Footer from '@/components/Footer'
import AddTodo from '@/redux/containers/AddTodo'
import VisibleTodoList from '@/redux/containers/VisibleTodoList'
/**
 * 用户管理页面
 */

function User (props) {
    let query = new URLSearchParams(useLocation().search);
    
        // let query = 
        return (
            // <div>
            //     用户管理
            // </div>
            <div>
                111
                <AddTodo />
                <VisibleTodoList
                    filter = {query.get("filter")}
                />
                <Footer />
            </div>
        )
}


export default User