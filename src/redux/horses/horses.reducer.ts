import HorsesActionsTypes from "./horses.types";
export interface Physical {
  height: number;
  weight: number;
}

export interface Profile {
  favouriteFood: string;
  physical: Physical;
}

export interface Horse {
  id: string;
  name: string;
  profile: Profile;
}

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

    case HorsesActionsTypes.HORSE_UPDATED:
      return {
        ...state,
        items: [...state.items].map((item) => {
          return (item as Horse).id === action.payload.id
            ? action.payload
            : item;
        }),
      };

    case HorsesActionsTypes.ADD_HORSE:
      console.log("action", action);
      return {
        ...state,
        items: [...state.items].concat(action.payload),
      };
    default:
      return state;
  }
}
