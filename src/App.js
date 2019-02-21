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
  renderMe = () => {
    const { receiveData } = this.props;

    return receiveData.data.map(res => (
      <li key={res.id.value}>
        <img src={res.picture.medium} alt="profile" />
        Hi my name is{" "}
        <span style={{ textTransform: "capitalize" }}>
          {res.name.first}
          {res.id.value}
        </span>
      </li>
    ));
  };
  render() {
    const { fetcherAPI, promiseReducer } = this.props;
    // const asd = receiveData.data.map(res => console.log(res));
    return (
      <div className="App">
        <DenseAppBar />
        Hello
        <button type="submit" onClick={fetcherAPI}>
          Hit Me!
        </button>
        {promiseReducer.isLoading ? "LOADING" : "NOPE"}
        <ul>{this.renderMe()}</ul>
      </div>
    );
  }
}

App.defaultProps = {
  receiveData: []
};

App.propTypes = {
  fetcherAPI: PropTypes.func.isRequired,
  receiveData: PropTypes.shape({
    name: PropTypes.string
  }),
  promiseReducer: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { receiveData, txtQuery, promiseReducer } = state;
  return {
    receiveData,
    promiseReducer,
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
