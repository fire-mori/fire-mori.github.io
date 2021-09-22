import HorsesActionsTypes from "./horses.types";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function horsesReducer(state = initialState, action: any) {
  switch (action.type) {
    case HorsesActionsTypes.FETCH_HORSES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case HorsesActionsTypes.FETCH_HORSES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case HorsesActionsTypes.FETCH_HORSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
}
