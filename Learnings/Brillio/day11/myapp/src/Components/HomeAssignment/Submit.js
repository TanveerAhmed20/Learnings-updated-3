import React from "react";

const Submit = ({ details }) => {
  const { fname, lname, email, phone } = details;
  console.log(details);
  return (
    <div>
      <h5>FORM SUBMITTED</h5>
      <ul>{Object.entries(details).map(([ key, value ]) => <li>{key}:{value}</li>)}</ul>
    </div>
  );
};

export default Submit;
