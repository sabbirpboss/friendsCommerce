import React, { Component } from "react";

// create class based components
class Row extends Component {
  render() {
    // console.log(this.props.children);
    return (
    //   <div className={"flex" + " " + this.props.className}>
      <div className={`flex ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
