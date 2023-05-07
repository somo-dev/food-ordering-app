import { configureStore } from '@reduxjs/toolkit';
import uiCartSlice from './cart-ui-slice';
import cartSlice from './cart-logic';
export const store = configureStore({
      reducer: {cardUi: uiCartSlice.reducer, cartt: cartSlice.reducer}
})