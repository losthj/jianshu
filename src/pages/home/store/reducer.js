// import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState =fromJS( {
    topicList:[],
    articleList:[],
    recommendList:[]


    // topicList:[{
    //     id:1,
    //     title:"社会热点",
    //     imgUrl:"https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    // },{
    //     id:2,
    //     title:"手绘",
    //     imgUrl:"https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    // }],
    // articleList:[{
    //     id:1,
    //     title:"君许一生一世",
    //     desc:"一花一世界，一念一尘缘，这一世的轮回随你辗转在红尘里，咫尺天涯的距离，将一份相思分隔在此岸与彼岸，不敢想象执手时的倾心，只怕想了，爱会缠绵缱倦不...",
    //     imgUrl:"https://upload-images.jianshu.io/upload_images/15950442-1df8b7f9be07ad74.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },{
    //     id:2,
    //     title:"君许一生一世",
    //     desc:"一花一世界，一念一尘缘，这一世的轮回随你辗转在红尘里，咫尺天涯的距离，将一份相思分隔在此岸与彼岸，不敢想象执手时的倾心，只怕想了，爱会缠绵缱倦不...",
    //     imgUrl:"https://upload-images.jianshu.io/upload_images/15950442-1df8b7f9be07ad74.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },{
    //     id:3,
    //     title:"君许一生一世",
    //     desc:"一花一世界，一念一尘缘，这一世的轮回随你辗转在红尘里，咫尺天涯的距离，将一份相思分隔在此岸与彼岸，不敢想象执手时的倾心，只怕想了，爱会缠绵缱倦不...",
    //     imgUrl:"https://upload-images.jianshu.io/upload_images/15950442-1df8b7f9be07ad74.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },{
    //     id:4,
    //     title:"君许一生一世",
    //     desc:"一花一世界，一念一尘缘，这一世的轮回随你辗转在红尘里，咫尺天涯的距离，将一份相思分隔在此岸与彼岸，不敢想象执手时的倾心，只怕想了，爱会缠绵缱倦不...",
    //     imgUrl:"https://upload-images.jianshu.io/upload_images/15950442-1df8b7f9be07ad74.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // }],
    // recommendList:[{
    //     id:1,
    //     imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    // },{
    //     id:2,
    //     imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    // }]
});

export default (state = defaultState,action) => {
    switch(action.type){
        case 'change_home_data':
          //  console.log(action);
          return state.merge({
              topicList:fromJS(action.topicList),
              articleList:fromJS(action.articleList),
              recommendList:fromJS(action.recommendList)
          })
        // return  state.set('topList', fromJS(action.topicList));
        default:
            return state;
    }

}