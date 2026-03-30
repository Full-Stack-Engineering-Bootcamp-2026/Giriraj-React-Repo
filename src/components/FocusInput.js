import React, { Component } from "react";
import Input from "./Input";
export class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
   clickHandler=()=>{
    this.inputRef.current.focusInput();
   }
  render() {
    return (
      <div>
        <Input ref={this.inputRef} />
        <button onClick={this.clickHandler}>CLick Me</button>
      </div>
    );
  }
}

export default FocusInput;
