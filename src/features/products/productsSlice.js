import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    category: "All rooms",
    priceRange: "All",
  },
  products: [
    {
      id: 1,
      name: "Sofa",
      category: "Living Room",
      desc: "White Drawer unit",
      longDesc:
        "A comfortable white sofa with a modern design, perfect for any living room. It offers great seating comfort and durability.",
      rating: 5,
      price: 200,
      image: "/public/bg.png",
    },
    {
      id: 2,
      name: "Chair",
      category: "Bedroom",
      desc: "White Drawer unit",
      longDesc:
        "An elegant white chair with a sturdy frame, ideal for bedroom seating. It provides excellent back support and style.",
      rating: 2,
      price: 100,
      image: "/public/bg.png",
    },
    {
      id: 3,
      name: "Sofa",
      category: "Living Room",
      desc: "White Drawer unit",
      longDesc:
        "A stylish white sofa that adds a touch of sophistication to any living space. It's built for comfort and long-lasting use.",
      rating: 3,
      price: 100,
      image: "/public/bg.png",
    },
    {
      id: 4,
      name: "Bed",
      category: "Bedroom",
      desc: "White Drawer unit",
      longDesc:
        "A luxurious white bed with a robust frame, ensuring a restful night's sleep. It combines elegance with functionality.",
      rating: 4,
      price: 100,
      image: "/public/bg.png",
    },
    {
      id: 5,
      name: "Dining Table",
      category: "Dining",
      desc: "Wooden dining table",
      longDesc:
        "A classic wooden dining table that comfortably seats six. It's perfect for family dinners and gatherings.",
      rating: 5,
      price: 350,
      image: "/public/bg.png",
    },
    {
      id: 6,
      name: "Kitchen Cabinet",
      category: "Kitchen",
      desc: "Modern kitchen cabinet",
      longDesc:
        "A sleek and modern kitchen cabinet with ample storage space for all your kitchen essentials.",
      rating: 4,
      price: 299,
      image: "/public/bg.png",
    },
    {
      id: 7,
      name: "Outdoor Chair",
      category: "Outdoor",
      desc: "Comfortable outdoor chair",
      longDesc:
        "A comfortable and weather-resistant outdoor chair, perfect for your patio or garden.",
      rating: 5,
      price: 150,
      image: "/public/bg.png",
    },
    {
      id: 8,
      name: "Bathroom Sink",
      category: "Bathroom",
      desc: "Elegant bathroom sink",
      longDesc:
        "An elegant bathroom sink with a modern design, made from high-quality materials for durability.",
      rating: 4,
      price: 180,
      image: "/public/bg.png",
    },
    {
      id: 9,
      name: "Patio Set",
      category: "Outdoor",
      desc: "Outdoor patio set",
      longDesc:
        "A stylish patio set that includes a table and four chairs, perfect for outdoor dining and relaxation.",
      rating: 5,
      price: 400,
      image: "/public/bg.png",
    },
    {
      id: 10,
      name: "Kitchen Island",
      category: "Kitchen",
      desc: "Functional kitchen island",
      longDesc:
        "A functional kitchen island with additional counter space and storage, ideal for meal preparation.",
      rating: 4,
      price: 320,
      image: "/public/bg.png",
    },
    {
      id: 11,
      name: "Bathroom Cabinet",
      category: "Bathroom",
      desc: "Spacious bathroom cabinet",
      longDesc:
        "A spacious bathroom cabinet that offers ample storage for all your bathroom essentials.",
      rating: 3,
      price: 99,
      image: "/public/bg.png",
    },
    {
      id: 12,
      name: "Dining Chair",
      category: "Dining",
      desc: "Comfortable dining chair",
      longDesc:
        "A comfortable dining chair with a cushioned seat and backrest, perfect for long dinners.",
      rating: 4,
      price: 75,
      image: "/public/bg.png",
    },
    {
      id: 13,
      name: "Outdoor Table",
      category: "Outdoor",
      desc: "Durable outdoor table",
      longDesc:
        "A durable outdoor table made from weather-resistant materials, ideal for your patio or garden.",
      rating: 4,
      price: 220,
      image: "/public/bg.png",
    },
    {
      id: 14,
      name: "Kitchen Stool",
      category: "Kitchen",
      desc: "Modern kitchen stool",
      longDesc:
        "A modern kitchen stool with a sleek design, providing comfortable seating at your kitchen counter.",
      rating: 3,
      price: 85,
      image: "/public/bg.png",
    },
    {
      id: 15,
      name: "Bathroom Mirror",
      category: "Bathroom",
      desc: "Elegant bathroom mirror",
      longDesc:
        "An elegant bathroom mirror with a contemporary design, perfect for any modern bathroom.",
      rating: 4,
      price: 120,
      image: "/public/bg.png",
    },
    {
      id: 16,
      name: "Dining Set",
      category: "Dining",
      desc: "Complete dining set",
      longDesc:
        "A complete dining set that includes a table and six chairs, designed for comfort and style.",
      rating: 5,
      price: 450,
      image: "/public/bg.png",
    },
    {
      id: 17,
      name: "Outdoor Sofa",
      category: "Outdoor",
      desc: "Comfortable outdoor sofa",
      longDesc:
        "A comfortable outdoor sofa made with weather-resistant materials, perfect for lounging in your garden.",
      rating: 4,
      price: 300,
      image: "/public/bg.png",
    },
    {
      id: 18,
      name: "Kitchen Table",
      category: "Kitchen",
      desc: "Wooden kitchen table",
      longDesc:
        "A sturdy wooden kitchen table that offers ample space for meal preparation and dining.",
      rating: 4,
      price: 250,
      image: "/public/bg.png",
    },
    {
      id: 19,
      name: "Bathroom Shelf",
      category: "Bathroom",
      desc: "Functional bathroom shelf",
      longDesc:
        "A functional bathroom shelf that provides extra storage space for your bathroom items.",
      rating: 3,
      price: 70,
      image: "/public/bg.png",
    },
    {
      id: 20,
      name: "Dining Bench",
      category: "Dining",
      desc: "Comfortable dining bench",
      longDesc:
        "A comfortable dining bench that can accommodate multiple guests, perfect for family meals.",
      rating: 4,
      price: 150,
      image: "/public/bg.png",
    }
  ]
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
      (priceRange === "0-99.99$" && product.price < 100) ||
      (priceRange === "100-199.99$" &&
        product.price >= 100 &&
        product.price < 200) ||
      (priceRange === "200-299.99$" &&
        product.price >= 200 &&
        product.price < 300) ||
      (priceRange === "300-399.99$" &&
        product.price >= 300 &&
        product.price < 400) ||
      (priceRange === "400$+" && product.price >= 400);
    return matchesCategory && matchesPrice;
  });
};

export default productsSlice.reducer;
