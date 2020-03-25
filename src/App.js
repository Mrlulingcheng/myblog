import React from 'react'
import style from './App.less'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import User from './pages/User'
import Article from './pages/Article'
import BasicLayout from "@/layout/BasicLayout/BasicLayout"
function App() {
    return (
        <Router>
            <Route path="/">
                <BasicLayout></BasicLayout>
            </Route>
        </Router>
    )
}

export default App