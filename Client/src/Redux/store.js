import { configureStore } from '@reduxjs/toolkit'

import BlogsReducer from './blogsReducer'
import UserReducer from './userReducer'



const store = configureStore({
  reducer: {
   Blogs:BlogsReducer ,
    User: UserReducer
  }
})
export{store}