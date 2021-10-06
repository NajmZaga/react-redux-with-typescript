import { Reducer } from "redux";
import { DECREMENT_VALUE, INCREMENT_VALUE, ValueActionTypes } from "./types";

export interface IValueInitialState {
  value: number;
};

// Initial state in which we define our initial data
const initialState: IValueInitialState = {
  value: 0
};

// Reducer which will copy the initial state and update the copy then returns it
export const dispatchReducer: Reducer<typeof initialState, ValueActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return {
        ...state,
        value: state.value + action.payload
      };

    case DECREMENT_VALUE:
      return {
        ...state,
        value: state.value - action.payload
      }; 
  
    default:
      return state;
  }
}