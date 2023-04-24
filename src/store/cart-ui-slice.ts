import { createSlice } from '@reduxjs/toolkit';

const uiCartSlice = createSlice({
      name: 'cart-ui',
      initialState: {cartIsVisible: false},
      reducers: {
            toggle(state){
                  state.cartIsVisible = !state.cartIsVisible;
            }
      }
})
export const uiCartActions = uiCartSlice.actions;
export default uiCartSlice;