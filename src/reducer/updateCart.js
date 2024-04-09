const initialState = {
  cart: [],
};

const updateCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      const index = state.cart.findIndex((i) => i.id === action.payload.id);

      if (index >= 0) {
        state.cart[index].rating.count += 1;
        return {
          ...state,
        };
      } else {
        const rating = { ...action.payload.rating, count: 1 };
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, rating }],
        };
      }
    }

    case "REMOVEONE": {
      const index = state.cart.findIndex((i) => i.id === action.payload.id);
      if (index >= 0) {
        state.cart[index].rating.count -= 1;
      }
      return {
        ...state,
      };
    }

    case "REMOVE": {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default updateCart;
