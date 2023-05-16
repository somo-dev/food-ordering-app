import { createSlice } from "@reduxjs/toolkit";
interface ICartItemsProps {
      items: {
            id: string,
            imageId: string,
            price: number,
            quantity: number,
            totalPrice: number,
            title: string,
            restName: string,
            location: string,
            itemAttribute: {}
      }[],
      totalQuantity: number,
      totalAmount: number

}
const cartSlice = createSlice({
      name: "cart-items",
      initialState: {
            items: [{
                  id: '',
                  imageId: '',
                  price: 0,
                  quantity: 0,
                  totalPrice: 0,
                  title: '',
                  restName: '',
                  location: '',
                  itemAttribute: {}
            }],
            totalQuantity: 0,
            totalAmount: 0
      },
      reducers: {
            addItemToCart(state: ICartItemsProps, action) {
                  const newItem = action.payload;
                  const existingItem = state?.items?.find((item: any) => item.id === newItem.id);
                  state.totalQuantity++;
                  state.totalAmount += newItem.price;
                  if (!existingItem) {
                        state.items.push({
                              id: newItem.id,
                              imageId: newItem.imageId,
                              price: newItem.price,
                              quantity: 1,
                              totalPrice: newItem.price,
                              title: newItem.title,
                              restName: newItem.restName,
                              location: newItem.location,
                              itemAttribute: newItem.itemAttribute
                        })
                  } else {
                        existingItem.quantity++;
                        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                  }
            },
            removeItemsFromCart(state: ICartItemsProps, action) {
                  const id = action.payload;
                  const existingItem: any = state.items.find(item => item.id === id);
                  state.totalQuantity--;
                  state.totalAmount -= existingItem.price;
                  if (existingItem.quantity === 1) {
                        state.items = state.items.filter(item => item.id !== id);
                  } else {
                        existingItem.quantity--;
                        existingItem.totalAmount = existingItem.totalAmount - existingItem.price;
                  }
            }
      }
}
)
export const cartActions = cartSlice.actions;
export default cartSlice