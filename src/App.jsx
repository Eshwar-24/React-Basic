import React, { Component } from "react";
import Withdraw from "./components/withdraw";
class App extends Component {
  state = { value: 2000 };
  decrement = (i) => {
    this.setState((pre) => {
      if (pre.value >= 50 && i == 50) {
        console.log(pre);
        return { value: pre.value - 50 };
      }
      if (pre.value >= 100 && i === 100) return { value: pre.value - 100 };
      if (pre.value >= 200 && i === 200) return { value: pre.value - 200 };
      if (pre.value >= 500 && i === 500) return { value: pre.value - 500 };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="m1">
        <div className="main-container">
          <div>
            <div class="main">
              <div className="iv">
                <p className="para">s</p>
              </div>
              <h1 className="heading">Sarah Williams</h1>
            </div>
            <div className="balance">
              <p className="heading1">Your Balance</p>
              <div>
                <h1 className="number">{value}</h1>
                <p className="rupees">inrupees</p>
              </div>
            </div>
            <p className="withdraw">Withdraw</p>
            <p className="choose">CHOOSE SUM(IN RUPEES)</p>
            <div className="btn-container">
              <Withdraw id={50} decrement={this.decrement}></Withdraw>
              <Withdraw id={100} decrement={this.decrement}></Withdraw>
              <Withdraw id={200} decrement={this.decrement}></Withdraw>
              <Withdraw id={500} decrement={this.decrement}></Withdraw>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
