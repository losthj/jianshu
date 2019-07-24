// const defaultState = {
//     focused:false
// };

// export default (state = defaultState,action) => {
//     if(action.type === 'search_focus'){
//         return {
//             focused:true
//         }
//     }
//     if(action.type === 'search_blur'){
//         return {
//             focused:false
//         }
//     }
//  return state;
// }

import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer }from '../pages/home/store'

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
});

export default reducer;