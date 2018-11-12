import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actions";

class CounterWithoutHooks extends Component {
  render() {
    return (
      <div className="counter">
        <p>Counter value: {this.props.counter}</p>
        <button className="plus" onClick={this.props.incrementCounter}>
          +
        </button>
        <button className="minus" onClick={this.props.decrementCounter}>
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter });
const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch({ type: INCREMENT_COUNTER }),
  decrementCounter: () => dispatch({ type: DECREMENT_COUNTER })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterWithoutHooks);
