import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteCartItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const cartitem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      cartitem.quantity++;
      cartitem.totalPrice = cartitem.quantity * cartitem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const cartitem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      cartitem.quantity--;
      cartitem.totalPrice = cartitem.quantity * cartitem.unitPrice;
      if (cartitem.quantity === 0)
        cartSlice.caseReducers.deleteCartItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentItemQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const {
  addCartItem,
  deleteCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
