const PersonalDetails = ({ step, back, next, details }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    next({
      email: e.target.elements.email.value,
      phone: e.target.elements.pnumber.value,
    });
  };
  return (
    <form name="myform" onSubmit={onSubmitHandler}>
      <h4>Personal Details</h4>
      <div className="imp">
        <label htmlFor="email"> Email </label>{" "}
        <input type="email" id="email" name="email" required />
      </div>
      <div className="imp">
        <label htmlFor="pnumber"> Mobile </label>{" "}
        <input type="text" id="pnumber" name="pnumber" required />{" "}
      </div>
      <div className="buttons">
        <button type="button" onClick={back}>
          BACK
        </button>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default PersonalDetails;
