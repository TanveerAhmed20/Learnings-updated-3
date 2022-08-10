import "./Signup.scss";
const UserDetails = ({ step, next, details }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
     next({
      fname: e.target.elements.fname.value,
      lname: e.target.elements.lname.value,
    });
  };
  return (
    <>
      <form name="myform" onSubmit={onSubmitHandler}>
        <h4>User Details</h4>
        <div className="imp">
          <label htmlFor="fname"> First Name </label>
          <input type="text" id="fname" name="fname" required />
        </div>
        <div className="imp">
          <label htmlFor="lname"> Last Name </label>
          <input type="text" id="lname" name="lname" required />
        </div>
        <div className ="buttons">
        <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
};
export default UserDetails;
