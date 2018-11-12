import React from 'react';
import { useRedux } from "react-redux-hooks";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actions";

export const CounterWithHooks = () => {
  const [state, dispatch] = useRedux();

  return (
    <div className="counter">
      <p>Counter value: {state.counter || 0}</p>
      <button className="plus" onClick={() => dispatch({type: INCREMENT_COUNTER})}>
        +
      </button>
      <button className="minus" onClick={() => dispatch({type: DECREMENT_COUNTER})}>
        -
      </button>
    </div>
  );
};
