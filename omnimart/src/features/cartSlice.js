// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(product => product.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload); // Ensure payload has name, price, etc.
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    checkoutCart: (state) => {
      state.items = []; // Clear the cart
    },
  },
});

export const { addToCart, removeFromCart, checkoutCart } = cartSlice.actions;
export default cartSlice.reducer;
