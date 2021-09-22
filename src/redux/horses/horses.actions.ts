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

const getHorses = () => {
  return fetch("http://localhost:3016/horse")
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchHorsesBegin = () => ({
  type: HorsesActionsTypes.FETCH_HORSES_BEGIN,
});

export const fetchHorsesSuccess = (horses: Horse[]) => ({
  type: HorsesActionsTypes.FETCH_HORSES_SUCCESS,
  payload: horses,
});

export const fetchHorsesFailure = (error: string) => ({
  type: HorsesActionsTypes.FETCH_HORSES_FAILURE,
  payload: error,
});

export const horseUpdated = (updatedHorse: Horse) => ({
  type: HorsesActionsTypes.HORSE_UPDATED,
  payload: updatedHorse,
});

export const failedUpdate = (error: string) => ({
  type: HorsesActionsTypes.HORSE_UPDATED_FAILED,
  payload: error,
});

export const horseAdded = (horse: Horse) => ({
  type: HorsesActionsTypes.ADD_HORSE,
  payload: horse,
});

export const failedAdd = (error: string) => ({
  type: HorsesActionsTypes.HORSE_ADD_FAILED,
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

export const updateHorses = (updatedHorse: any, id: string) => {
  return (dispatch: any) => {
    fetch(`http://localhost:3016/horse/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedHorse),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch(updatedHorse(updatedHorse));
      })
      .catch((error) => {
        dispatch(failedUpdate(error));
      });
  };
};

export const addHorse = (newHorse: Omit<Horse, "id">) => {
  return (dispatch: any) => {
    fetch(`http://localhost:3016/horse`, {
      method: "PUT",
      body: JSON.stringify(newHorse),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const horseID = await response.text();
        const addedHorse = {
          id: horseID,
          ...newHorse,
        };
        dispatch(horseAdded(addedHorse));
      })
      .catch((error) => {
        dispatch(failedAdd(error));
      });
  };
};
