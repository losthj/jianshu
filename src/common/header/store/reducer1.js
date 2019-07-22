import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState =fromJS( {
    focused:false,
    list:[]
});

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
        return  state.set('focused',true)
        // {
        //     focused:true
        // }
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused',false)
        // {
        //     focused:false
        // }
    }
 return state;
}