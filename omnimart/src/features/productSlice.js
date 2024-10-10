import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: "Product 1", price: 29.99, quantity: 10 },
    { id: 2, name: "Product 2", price: 19.99, quantity: 5 },
    // Add more products as needed
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        state.products[productIndex] = updatedProduct;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    purchaseProduct: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        state.products[productIndex].quantity -= quantity;
        if (state.products[productIndex].quantity < 0) {
          state.products[productIndex].quantity = 0; // Ensure stock doesn't go below 0
        }
      }
    },
  },
});

export const { addProduct, updateProduct, removeProduct, purchaseProduct } = productSlice.actions;
export default productSlice.reducer;
