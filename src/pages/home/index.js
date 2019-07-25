import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';

class home extends Component {
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
            </HomeWrapper>
        );
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList: result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList
            }
            this.props.changeHomeData(action);
            //console.log(action)
        })
    }
}

const mapDispath =(dispatch)=>({
    changeHomeData(action){
        dispatch(action)
    }
})

export default connect(null,mapDispath)(home);