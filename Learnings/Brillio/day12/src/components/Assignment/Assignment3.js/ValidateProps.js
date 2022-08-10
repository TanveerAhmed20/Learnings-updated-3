import React from "react";
import PropTypes from "prop-types";
const ValidateProp = (props) => {
  // console.log(props..propArray);
  return (
    <div>
      <h4>Array Validation </h4>
      {props.arrayVal}
      {props.arrayVal ? " is Valid Array" : " is Invalid Array"}
      <h4>Bool validation </h4>
      {props.boolVal}
      {props.boolVal ? " is Valid Boolean" : "is Invalid Boolean"}
      <h4>Array Number </h4>
      {props.numberVal}
      {props.numbeVal ? "is Valid Number" : "is Invalid Number"}
      <h4>Array String</h4>
      {props.stringVal}
      {props.stringVal ? "is Valid String" : " is Invalid String"}
    </div>
  );
};
ValidateProp.propTypes = {
  arrayVal: PropTypes.array.isRequired,
  boolVal: PropTypes.bool.isRequired,
  numberVal: PropTypes.number,
  stringVal: PropTypes.string,
};

ValidateProp.defaultProps = {
  arrayVal: [1, 2, 3, 4, 5],
  boolVal: true,
  numberVal: "dfad",
  stringVal: "hello world",
};
export default ValidateProp;
