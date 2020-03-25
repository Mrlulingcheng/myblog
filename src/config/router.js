import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import App from '@/App'
import User from '@/pages/User'
import Article from '@/pages/Article'

function Root() {
    return (
        <Router>
            <Route path="/user">
                <User/>
            </Route>
            <Route path="/user">
                <Article/>
            </Route>
            <Route path="/">
                <App/>
            </Route>
        </Router>
    )
}


export default Root