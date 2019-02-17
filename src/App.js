import React, { Component } from "react";
import "styles/App.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import axios from "axios";

import { fetcherAPI, query } from "actions/index";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    e.preventDefault();

    let inputVal = e.target.elements.textinpt.value.trim();

    if (inputVal !== "") {
      e.target.elements.textinpt.value = "";
    }

    this.props.query(inputVal);
    console.log(inputVal);
  };
  render() {
    return (
      <div className="App">
        Hello
        <button type="submit" onClick={this.props.fetcherAPI}>
          Hit Me!
        </button>
        <form onSubmit={this.handleChange}>
          <input type="text" name="textinpt" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { receiveData, txtQuery } = state;
  return {
    receiveData,
    txtQuery
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetcherAPI,
      query
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
