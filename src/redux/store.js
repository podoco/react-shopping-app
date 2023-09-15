import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import Product from '../components/product/Product';
import productReducer from './slice/productSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store;