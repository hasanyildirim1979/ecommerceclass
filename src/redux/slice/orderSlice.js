//// order (sipariş) miktarı ve durumlarının yönetldiği redux
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orderHistory: [],
  totalOrderAmount: null
}

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDERS(state,action){
      state.orderHistory = action.payload
    },
    CALC_TOTAL_ORDER_AMOUNT(state,action){
      let total = 0 ;
      state.orderHistory.map((item)=>{
        const {orderAmount} = item;
        return total += orderAmount;
      })
      state.totalOrderAmount = total
    }
  }
});

export const {STORE_ORDERS,CALC_TOTAL_ORDER_AMOUNT} = orderSlice.actions

export const selectOrderHistory = (state) => state.orders.orderHistory
export const selectTotalOrderAmount = (state) => state.orders.totalOrderAmount

export default orderSlice.reducer