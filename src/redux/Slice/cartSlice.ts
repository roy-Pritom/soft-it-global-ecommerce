import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartItem {
  productId: string;
}

interface CartState {
  items: CartItem[];
  isData: string | null;
}

const initialState: CartState = {
  items: [],
  isData: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const productIdToAdd = action.payload;
      if (!state.items.some((item) => item.productId === productIdToAdd)) {
        state.items.push({ productId: productIdToAdd });
        console.log(`Product ${productIdToAdd} added to cart`);
        console.log("Current cart state:", state.items);
      }
    },

    setData: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      state.isData = data;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.productId !== productIdToRemove
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setData } =
  cartSlice.actions;

export default cartSlice.reducer;
