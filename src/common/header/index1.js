import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store/index';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,Searchwrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';

//无状态组件


const getListArea = (show) =>{
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    }else{
        return null
    }
}

const Header =(props)=>{
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
                            in={props.focused} 
                            timeout={200} 
                            classNames='slide'>
                            <NavSearch className={props.focused ? 'focused':''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={props.focused ? 'focused iconfont':'iconfont'}>&#xe60a;</span>
                        {
                            getListArea(props.focused)
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

const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused'])
        //focused:state.get('header').get('focused')
    }
}
const mapDispathToProps = (dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchblur())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header) ;