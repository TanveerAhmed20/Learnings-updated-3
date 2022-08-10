function magic(fun, msg, no) {
  if (no != null && typeof no === "number") {
    if (msg != null && typeof msg === "string") {
      return fun(msg, no);
    }
  }
}
function printMessageNTimes(msg, no) {
  for (let i = 0; i < no; i++) {
    console.log(msg);
  }
}
function getNthLetter(msg, no) {
  return msg.charAt(no);
}
function getMyString(msg, no) {
  return msg.substring(0, no);
}
magic(printMessageNTimes, "welcome", 4);
console.log(magic(getNthLetter, "JavaScipt", 4));
console.log(magic(getMyString, "I love JavaScript world", 16));
