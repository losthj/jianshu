import React from 'react';
import { GlobalStyle } from "./style";
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail'


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
            <Route path="/detail" exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </div>
    
  );
}

export default App;
