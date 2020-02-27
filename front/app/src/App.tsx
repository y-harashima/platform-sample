import React from 'react';
import './App.css';

import { CustomerRequest } from './customer/sample_pb';
import { CustomerClient } from './customer/SampleServiceClientPb';
import { ProductOwnerRequest } from './productowner/sample_pb';
import { ProductOwnerClient } from './productowner/SampleServiceClientPb';

const initialState = {
  inputText: "Input your name here.",
  message: ""
};
type State = Readonly<typeof initialState>;

class App extends React.Component<{}, State> {

  public readonly state: State = initialState;

  private customerClick = () => {
    const request = new CustomerRequest();
    request.setName(this.state.inputText);

    const client = new CustomerClient("http://localhost:80", {}, {});
    client.sayName(request, {}, (err, ret) => {
      if(err || ret === null) {
        throw err;
      }
      this.setState({ message: ret.getMessage() });
    });
  };

  private productOwnerClick = () => {
    const request = new ProductOwnerRequest();
    request.setName(this.state.inputText);

    const client = new ProductOwnerClient("http://localhost:80", {}, {});
    client.sayName(request, {}, (err, ret) => {
      if(err || ret === null) {
        throw err;
      }
      this.setState({ message: ret.getMessage() });
    });
  };

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState ({ inputText: e.target.value });
  };

  public render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.onChange}
        /><br/>
        <button onClick={this.customerClick}>I'm customer!</button><br/>
        <button onClick={this.productOwnerClick}>I'm product owner!</button><br/>
        <p>{this.state.message}</p>
      </div>
    );
  }
} 

export default App;
