import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button type="submit" onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default Input;
