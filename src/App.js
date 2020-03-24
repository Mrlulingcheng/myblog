import React from 'react'
import {
    Button
} from 'antd';
import BasicLayout from '@layout/BasicLayout/index'
import style from './App.less'

function App() {
    return (
        <div>
            <div className={style.pic}></div>
            <BasicLayout></BasicLayout>
        </div>
    )
}

export default App