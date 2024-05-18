import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
} from "./products/cartActions";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }
    case UPDATE_CART_QUANTITY: {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
