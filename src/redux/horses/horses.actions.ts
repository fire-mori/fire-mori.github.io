import HorsesActionsTypes from "./horses.types";
interface Physical {
  height: number;
  weight: number;
}

interface Profile {
  favouriteFood: string;
  physical: Physical;
}
interface Horse {
  id: string;
  name: string;
  profile: Profile;
}

function getHorses() {
  return fetch("http://localhost:3016/horse")
    .then((response) => response.json())
    .then((data) => data);
}

export const fetchHorsesBegin = () => ({
  type: HorsesActionsTypes.FETCH_HORSES_BEGIN,
});

export const fetchHorsesSuccess = (horses: Horse[]) => ({
  type: HorsesActionsTypes.FETCH_HORSES_SUCCESS,
  payload: horses,
});

export const fetchHorsesFailure = (error: any) => ({
  type: HorsesActionsTypes.FETCH_HORSES_FAILURE,
  payload: error,
});

export function fetchHorses() {
  return (dispatch: any) => {
    dispatch(fetchHorsesBegin());
    return getHorses()
      .then((data) => {
        dispatch(fetchHorsesSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchHorsesFailure(error)));
  };
}
