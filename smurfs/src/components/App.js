import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurf } from '../actions/Action';
import { addSmurf } from '../actions/Action';


function App (props) {
  // console.log(props);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

const SmurfComponent = (props) => {
  console.log(props);
  return (
  <div>
  </div>
  )
}

// const mapStateToProps = state => {
//   return {
//   };
// };

export default connect(null, {getSmurf})(App);
