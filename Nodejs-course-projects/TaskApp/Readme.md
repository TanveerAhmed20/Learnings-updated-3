- **find()** : returns a cursor , which is a pointer .
  this method doesnt have any callback method

```javascript
db.collection("users")
  .find({ age: 27 })
  .toArray((error, users) => {});
```

- **count()**: returns number of records fetched

```javascript
db.collection("users")
  .find({ age: 23 })
  .count((error, count) => {
    if (error) return console.log("unable to find user");
    console.log(count);
  });
```

#### Updating documents

for updating documents you need to use update operators

Syntax ```db.collection(collection_name).updateOne(filter,updateDOC_object);```

```javascript
db.collection("users")
    .updateOne(
      {
        _id: new ObjectID("62e75bdcb0e76a19cca50c7b"),
      },
      {
        $set: {
          name: "mike tyson",
        },
      }
    )
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.error(err);
    });
```

mongoose is used as a middleware for doing crud in the mongodb database

NOTE : Make sure to start mongodb.js before u do any updates through mongoose.

step 1: do `node mongodb.js`
step 2 : do `node src/db/mongoose.js



HTTP REQUEST  : this consist of 5 parts: 

1. request type 
2. accept: document type to accept 
3. connection: Keep-Alive ( means donot close connection until asked to )
4. Authorization: For authenticatin purpose 
5. blank space 
6. request body 

```json
POST /tasks HTTP/1.1
Accept : application/json
Connection : Keep-Alive
Authorization : Bearer eyJhGcioiJiUz...

{"description":"order new drill bits"}
```


app.use(express.json());  is a middleware
that automatically parse incoming json into an js object for our use 


**Promise Chaining**
```javascript
User.findByIdAndUpdate('',{age"1})
.then(user => {
  console.log(user);
  return User.countDocument({age:1])
})
.then(result => console.log(result))
.catch(err => { console.log(err) });

```