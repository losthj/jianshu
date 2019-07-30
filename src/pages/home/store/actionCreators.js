import axios from 'axios';
import *as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (result) =>({
    type:constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})

const addHomeList = (list,nextPage) =>({
    type:constants.ADD_HOME_LIST,
    list:fromJS(list),
    nextPage
})

export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result)
            //this.props.changeHomeData(action);
           dispatch(action)
        })
    }
}

export const getMoreList =(page)=>{
    return (dispatch)=>{
       // console.log('click')
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result = res.data.data;
           // console.log(result)
            const action = addHomeList(result,page + 1)
            dispatch(action)
        })
    }
}

export const toggleTopShow =(show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})