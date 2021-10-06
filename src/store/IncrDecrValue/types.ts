import { Action } from "redux";

// Action Types
export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export type INCREMENT_VALUE = typeof INCREMENT_VALUE;

export const DECREMENT_VALUE = 'DECREMENT_VALUE';
export type DECREMENT_VALUE = typeof DECREMENT_VALUE;

// Action returned types
export interface IIncrementValue extends Action<INCREMENT_VALUE> {
  payload: number;
};

export interface IDecrementValue extends Action<DECREMENT_VALUE> {
  payload: number;
};

export type ValueActionTypes = IIncrementValue | IDecrementValue;