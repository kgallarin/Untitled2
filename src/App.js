import React, { Component } from "react";
import "styles/App.scss";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DenseAppBar from "Components/AppBar";

import { fetcherAPI } from "actions/index";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { fetcherAPI } = this.props;
    return (
      <div className="App">
        <DenseAppBar />
        Hello
        <button type="submit" onClick={fetcherAPI}>
          Hit Me!
        </button>
      </div>
    );
  }
}

App.propTypes = {
  fetcherAPI: PropTypes.func.isRequired
};

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
      fetcherAPI
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
