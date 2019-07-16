import React from 'react';
import { GlobalStyle } from "./style";
import Header from './common/header/index'
import {GlobalStyles} from './statics/iconfont/iconfont'

function App() {
  return (
      <div>
        <GlobalStyle />
        <GlobalStyles />
        <div>
          <Header />
        </div>
        
          
      </div>
    
  );
}

export default App;
