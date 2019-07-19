import * as constants from './constants';

const defaultState = {
    focused:false
};

export default (state = defaultState,action) => {
    // if(action.type === 'search_focus'){
    //     return {
    //         focused:true
    //     }
    // }
    // if(action.type === 'search_blur'){
    //     return {
    //         focused:false
    //     }
    // }
     if(action.type === constants.SEARCH_FOCUS){
        return {
            focused:true
        }
    }
    if(action.type === constants.SEARCH_BLUR){
        return {
            focused:false
        }
    }
 return state;
}