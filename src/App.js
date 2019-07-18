import React from 'react';
import { GlobalStyle } from "./style";
import Header from './common/header/index'
import {GlobalStyles} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store/index'

function App() {
  return (
      <div>
        <GlobalStyle />
        <GlobalStyles />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    
  );
}

export default App;
