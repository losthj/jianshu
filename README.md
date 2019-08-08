
## 简书网站的制作

1、使用Styled-Components与Reset.css的结合使用

https://github.com/styled-components/styled-components

https://meyerweb.com/eric/tools/css/reset/

2、使用iconfont嵌入图标 https://www.iconfont.cn/

3、安装react-Redux进行应用数据的管理

yarn add redux和yarn add react-redux

4、使用combineReducers完成对数据的拆分管理 (合并store)

5、immutable.js来管理store中的数据  https://facebook.github.io/immutable-js/

    immutable对象不可改变的

6、使用redux-immutable统一数据格式

7、ref可以获取dome节点

8、 store的流程编写 

    （1）react是面向数据编程，最难的地方是reducer.js的数据

    （2）react要改变数据要遵循redux的单向数据流的流程，首先需要派发action给到store,
    store在给到reducer,reducer返回一个新的数组给到store,store去变更数据内容，当数据发生变更了页面就发生改变。

9、（ajax）避免无意义的请求发送，提升组件性能  if(list.size === 0) 

10、react路由

    路由指的是根据url的不同，显示不同的内容。

安装路由yarn-router-dom 最新的第三方模块

exact表示当你的路径完全相等的时候，才显示内容

11、PureComponent有数据的时候需要用

12、页面路由参数的传递 

1） 通过id获取参数叫做 动态路由获取参数

13、异步组件及withRouter路由方法的使用 **

    yarn add react-loadable 用于加载具有动态导入的组件的高阶组件。

    import {withRouter} from 'react-redux-dom' 