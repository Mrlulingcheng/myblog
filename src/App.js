import React from 'react'
import style from './App.less'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import routers from '@/layout/BasicLayout/router'
import User from '@/pages/User'
import Article from '@/pages/Article'
import BasicLayout from "@/layout/BasicLayout/BasicLayout"

function App() {
    return (
        <Router>
          <Switch>
            <Route path="/">
              <BasicLayout>
                {
                  routers.map((route, index) => {
                    return (
                      <Route
                      key={index} 
                      exact={route.exact} 
                      path={route.path} 
                      children={<route.main/>}
                      />
                    )
                  })
                }
              </BasicLayout>
            </Route>
          </Switch>
        </Router>
    )
}

export default App