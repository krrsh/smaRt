import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: { items: [], addeditems: [], searcheditems: [] },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.searcheditems = action.payload;
    },
    setAddeditems: (state, action) => {
      const item = state.addeditems.find(
        (item) => item.id === action.payload.id
      );
      if (!item) {
        state.addeditems.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.addeditems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.addeditems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeitem: (state, action) => {
      state.addeditems = state.addeditems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    searchitem: (state, action) => {
      if (action.payload === "") {
        state.searcheditems = state.items;
        console.log("Reset to all items");
      } else {
        const query = action.payload.toLowerCase();
        state.searcheditems = state.items.filter((item) =>
          item.title.toLowerCase().includes(query)
        );
      }
    },
    checkout: (state, action) => {
      state.addeditems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  setAddeditems,
  increment,
  decrement,
  removeitem,
  searchitem,
  checkout,
} = productSlice.actions;
export default productSlice.reducer;
