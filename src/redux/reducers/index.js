import {
    combineReducers
} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// const combineReducers = reducers => {
//     return (state = {}, action) => {
//         //将对象转换为数组后遍历
//         return Object.keys(reducers).reduce(//返回一个initialState
//             (nextState, key) => {//通过reduce,映射出一个和reducer同名的状态到仓库
//                 nextState[key] = reducers[key](state[key], action);
//                 return nextState;
//             }, {}
//         );
//     };
// };
const rootReducer = combineReducers({
    todos,
    visibilityFilter
})

export default rootReducer