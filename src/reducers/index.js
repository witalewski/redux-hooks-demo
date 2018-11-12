import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions";

const initialState = {
  counter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1
      };
    case DECREMENT_COUNTER:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
