import { DECREMENT_VALUE, IDecrementValue, IIncrementValue, INCREMENT_VALUE } from "./types";

export const incrementValue = (value: number): IIncrementValue => ({
  type: INCREMENT_VALUE, // Required for deciding which operation to make
  payload: value // Optional (only if needed)
});

export const decrementValue = (value: number): IDecrementValue => ({
  type: DECREMENT_VALUE,
  payload: value
});