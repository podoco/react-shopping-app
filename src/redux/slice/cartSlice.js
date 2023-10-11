import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
  cartItems: typeof window !== "undefined" ?
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')) : [] : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  previousURL: ""
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      const increaseCount = action.payload.quantity ? action.payload.quantity : 1;

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += increaseCount
        toast.success(`${action.payload.name} 상품이 하나 추가되었습니다.`)
      } else {
        const tempProducts = { ...action.payload, cartQuantity: increaseCount }
        state.cartItems.push(tempProducts);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

    },
    CALCULATE_TOTAL_QUANTITY: (state, action) => {
      const array = [];
      state.cartItems.map((item) => {
        const { cartQuantity } = item;
        const quantity = cartQuantity;
        return array.push(quantity);
      })
      const totalQuantity = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.cartTotalQuantity = totalQuantity;
    },
    CALCULATE_SUBTOTAL: (state) => {
      const array = [];

      state.cartItems.map((item) => {
        const { price, cartQuantity } = item;

        const cartItemAmount = price * cartQuantity;
        return array.push(cartItemAmount);
      })

      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);

      state.cartTotalAmount = totalAmount;
    },

    SAVE_URL: (state, action) => {
      state.previousURL = action.payload;
    },
    DECREASE_CART: (state, action) => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.cartItems[productIndex].cartQuantity > 1) {

        state.cartItems[productIndex].cartQuantity -= 1;
        toast.info(`${action.payload.name} 개수 -1`)
      } else if (state.cartItems[productIndex].cartQuantity === 1) {
        const newCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )
        state.cartItems = newCartItem;
        toast.info(`${action.payload.name}이 장바구니에서 삭제되었습니다.`);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    REMOVE_FROM_CART: (state, action) => {
      const newCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      state.cartItems = newCartItem;
      toast.success(`${action.payload.name}이 장바구니에서 삭제되었습니다.`);

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    CLEAR_CART: (state, action) => {
      state.cartItems = [];
      toast.success('장바구니가 비었습니다.');
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  }
})

export const {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
  CALCULATE_SUBTOTAL,
  SAVE_URL,
  DECREASE_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

export default cartSlice.reducer;