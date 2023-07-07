import { configureStore } from '@reduxjs/toolkit'
import formInfoReducer from './formInfo'
export default configureStore({
    reducer: {
        formInfo: formInfoReducer
    }
})