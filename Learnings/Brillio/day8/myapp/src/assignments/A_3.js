// show employees in sorted manner

//printing all employees in unordered list:

const empl = require("../employees.json");

const Employees = () => {
  //   const { id, name, salary, currency } = empl[0];
  empl.sort((a, b) => a.salary - b.salary);
  return (
    <div className="container">
      {empl.map(({ id, name, salary, currency }) => (
        <ul key={id}>
          <li> ID : {id}</li>
          <li> NAME : {name}</li>
          <li> SALARY : {salary}</li>
          <li> CURRENY : {currency}</li>
        </ul>
      ))}
    </div>
  );
};

export default Employees;
