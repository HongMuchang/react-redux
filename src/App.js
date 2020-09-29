import React, { Component } from "react";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  //メソッド(setStateでの値の変更)
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    );
  }
}

export default App;
