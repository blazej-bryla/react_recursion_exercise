import React from "react";
import RecursiveComponent from "./RecursiveComponent";
import useTimer from "../hooks/useTimer";

const One = ({ children }) => {
  return (
    <div className="App-box">
      One
      {children}
    </div>
  );
};
const Two = ({ children }) => {
  return (
    <div className="App-box">
      Two
      {children}
    </div>
  );
};
const Three = ({ children }) => {
  return (
    <div className="App-box">
      Three
      {children}
    </div>
  );
};

const components = [One, Two, Three];

function Recursion() {
  const seconds = useTimer();

  return (
    <div className="App-wrapper">
      <div className="App-timer">{seconds} seconds</div>
      <RecursiveComponent components={components} index={0} />
    </div>
  );
}

Recursion.propTypes = {
  // ...
};

export default Recursion;
