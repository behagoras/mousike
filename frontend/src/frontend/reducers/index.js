const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'PLAY_SONG':
      return {
        ...state,
        playing: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
