import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store/index';


class home extends Component {
    handleScroollTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>

                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll?
                    <BackTop onClick={this.handleScroollTop}>回到顶部</BackTop>:null
                }
                
            </HomeWrapper>
        );
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents()
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState =(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispath =(dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(){
       if(document.documentElement.scrollTop>120){
            dispatch(actionCreators.toggleTopShow(true))
       }else{
            dispatch(actionCreators.toggleTopShow(false))
       }
    }
})

export default connect(mapState,mapDispath)(home);