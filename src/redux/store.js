import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import filterReducer from './slice/filterSlice';
import productReducer from './slice/productSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store;