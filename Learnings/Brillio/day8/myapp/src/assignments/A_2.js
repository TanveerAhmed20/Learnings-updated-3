// show employees in sorted manner 

//printing all employees in unordered list:

const empl = require("../employees.json");

const Employees = () => {
  //   const { id, name, salary, currency } = empl[0];
  empl.sort((a, b) =>a.salary-b.salary);
  return (
    <table className="container">
      {
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>salary</th>
            <th>currency</th>
          </tr>
        </thead>
      }

      {
        <tbody>
          {empl.map(({ id, name, salary, currency }) => (
            <tr key={id}>
              <td> {id}</td>
              <td> {name}</td>
              <td> {salary}</td>
              <td> {currency}</td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
};

export default Employees;
