import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Sofa",
      category: "Living Room",
      price: 200,
      image: "/path/to/sofa.jpg",
    },
    {
      id: 2,
      name: "Chair",
      category: "Living Room",
      price: 100,
      image: "/path/to/chair.jpg",
    },
    // Add other products
  ],
  filters: {
    category: "All rooms",
    priceRange: "All",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },
    setPriceRangeFilter: (state, action) => {
      state.filters.priceRange = action.payload;
    },
  },
});

export const { setCategoryFilter, setPriceRangeFilter } = productsSlice.actions;

export const selectProducts = (state) => {
  const { category, priceRange } = state.products.filters;
  return state.products.products.filter((product) => {
    let matchesCategory =
      category === "All rooms" || product.category === category;
    let matchesPrice =
      priceRange === "All" ||
      (priceRange === "0-99$" && product.price < 100) ||
      (priceRange === "100-199$" &&
        product.price >= 100 &&
        product.price < 200);
    return matchesCategory && matchesPrice;
  });
};

export default productsSlice.reducer;
