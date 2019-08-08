import React from 'react';
import { GlobalStyle } from "./style";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'


import {GlobalStyles} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store/index'

function App() {
  return (
      <div>
        <GlobalStyle />
        <GlobalStyles />
        <Provider store={store}>
         
          <BrowserRouter>
          <Header />
            {/* <Route path="/" exact render={()=> <div>Home</div>}></Route> */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route> {/* 第一种获取参数 */}         
            {/* <Route path="/detail" exact component={Detail}></Route>   */}
            {/* 第二种获取参数 */}
          </BrowserRouter>
        </Provider>
      </div>
    
  );
}

export default App;
