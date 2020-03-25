// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '@/App'
// import './coverage.less'

// /*
//     入口文件
// */
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '@/redux/reducers'
import App from '@/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)