import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Sofa",
      description: "Comfortable sofa",
      price: "$200",
      image: "/path/to/sofa.jpg",
    },
    {
      id: 2,
      name: "Chair",
      description: "Stylish chair",
      price: "$100",
      image: "/path/to/chair.jpg",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
