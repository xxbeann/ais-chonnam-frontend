import { combineReducers } from '@reduxjs/toolkit'

import practiceReducer from './practice'
import commentReducer from './comment'
// default로 해놨기 때문에 리덕스에 있는 export가 commentReucer로 들어간다.

const rootReducer = combineReducers({
  practice: practiceReducer,
  comment: commentReducer,
})

export default rootReducer

// modules에 index부분은 건드려야 한다.