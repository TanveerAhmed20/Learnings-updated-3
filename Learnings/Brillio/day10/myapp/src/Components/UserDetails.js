import Users from "./Users";
const users = [
  { id: 1, name: "aaa", email: "aaa@aaa.com" },
  { id: 2, name: "bbb", email: "bbb@bbb.com" },
  { id: 3, name: "ccc", email: "ccc@ccc.com" },
];
const UserDetails = () => {
  return <Users details={users} direction ="row"/>
};

const UserDetails1 = () => {
  return <Users details={users} direction = "column"/>
};


export { UserDetails,UserDetails1};
