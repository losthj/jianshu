import React, {Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store/index';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,Searchwrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';


class Header extends Component {
    getListArea(){
        //console.log("1")
        const {focused,list} =this.props;
        if(focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item)=>{
                                return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

    render() {
         const {focused,handleInputFocus,handleInputBlur} =this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                    <Searchwrapper>
                        <CSSTransition 
                            in={focused} 
                            timeout={200} 
                            classNames='slide'>
                            <NavSearch className={focused ? 'focused':''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont':'iconfont'}>&#xe60a;</span>
                        {
                            this.getListArea()
                        }
                    </Searchwrapper>            
                </Nav>
                <Addition>
                    <Button className="writting">
                        <span className="iconfont">&#xe61d;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
        //focused:state.get('header').get('focused')
        list:state.getIn(['header','list'])
    }
}
const mapDispathToProps = (dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchblur())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header) ;