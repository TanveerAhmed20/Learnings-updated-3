function connect(x, y) {
  const xReturnValue = x();
  const yReturnValue = y();
  return function (sal) {
    return xReturnValue + yReturnValue + sal;
  };
}

function x() {
  return "x() ";
}
function y() {
  return "y() ";
}

console.log(connect(x,y)("hello"));