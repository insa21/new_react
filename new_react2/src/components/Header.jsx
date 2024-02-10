// import PropTypes from "prop-types";
import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className="header">Header yahh gesss</h2>
        <div>{this.props.paragraf}</div>
      </div>
    );
  }
}
