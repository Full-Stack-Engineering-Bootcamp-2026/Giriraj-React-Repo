import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (e) => {
    this.cbRef = e;
  };
  }
  
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button type="submit" onClick={this.handleClick}>
          Check_Ref
        </button>
      </div>
    );
  }
}

export default RefsDemo;
