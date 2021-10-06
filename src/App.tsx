import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './App.css';
import { GlobalState } from './store';
import { decrementValue, incrementValue } from './store/IncrDecrValue/actions';
import { IValueInitialState } from './store/IncrDecrValue/reducers';

interface IAppProps {
  incrementValue: (value: number) => void;
  decrementValue: (value: number) => void;
  dispatch: IValueInitialState;
}

const AppInner: React.FC<IAppProps & ConnectedProps<typeof connector>> = ({
  dispatch,
  incrementValue: incrementValueAction,
  decrementValue: decrementValueAction
}) => {
  const handleInc = () => incrementValueAction(1);
  const handleDec = () => decrementValueAction(1);
  return (
    <div className="App">
      <div>Your value is: {dispatch.value}</div>
      <button onClick={handleInc}>Increment +</button>
      &nbsp; &nbsp;
      <button onClick={handleDec}>Decrement -</button>
    </div>
  );
}

// Transform our state data into props
const mapStateToProps = (state: GlobalState) => ({
  dispatch: state.dispatch
});

// Transform our actions into props
const mapDispatchToProps = {
  incrementValue,
  decrementValue
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export const App = connector(AppInner);
