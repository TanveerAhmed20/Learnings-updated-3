var books = ["a","b","c",["d","e","f","g"],"h","i"];

console.log(books.flat());
// FLATMAP


books =books.flatMap(x=>x);

console.log(books);