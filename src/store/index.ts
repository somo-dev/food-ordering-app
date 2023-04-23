import { configureStore } from '@reduxjs/toolkit';
import uiCartSlice from './cart-ui-slice';
export const store = configureStore({
      reducer: {cardUi: uiCartSlice.reducer}
})