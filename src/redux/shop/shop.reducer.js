import ShopActionType from "./shop.types";

const INIT_STATE = {
  collections: null,
  isLoading: false,
  errorMessage: null,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopActionType.START_FETCHING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case ShopActionType.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    }
    case ShopActionType.FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
