import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import filterReducer from './slice/filterSlice';
import productReducer from './slice/productSlice'
import cartReducer from './slice/cartSlice'
import checkoutReducer from './slice/checkoutSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
  checkout: checkoutReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store;