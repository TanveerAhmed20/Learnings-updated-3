# mongoDB shell commands 
---
Basic DDL Commands

* `show db`
* `use <dbname> : creates a database if not present`
* `db.createCollection('students');`
* `show collections`


---
 ## INSERTING INTO COLLECTION
 ```javascript
 db.ProductCollection.insert([
  { _id:1,item:"Laptop",prodCat :"Electronics",price:30000.0,quantity: 2,orderInfo:{_id:"O001",orderdate: ISODate("2014-01-01"),address:{street:"66,Airoli",city:"Mumbai",state:"MS",zipcode:700987,coords: [ -73.856077, 40.848447 ]},email:"capgemini@capgemini.com",mobiles:[8888108810]}}])
db.ProductCollection.insert([{ _id:2,item:"Mobile",prodCat :"Electronics",price:15000.0,quantity: 10,orderInfo:{"_id":"O002","orderdate" : ISODate("2010-03-12"),address:{street:"FC Road",city:"Pune",state:"MS",zipcode:40081,coords: [ -23.80007, 30.1123456 ]},email:"icres@ibm.com",mobiles:[9856342189]}}])
db.ProductCollection.insert([{ _id:5,item:"TV",prodCat :"Electronics",price:24000.0,quantity: 10,orderInfo:{"_id":"O003","orderdate" : ISODate("2012-06-17"),address:{street:"GT Road",city:"Sahibabad",state:"UP",zipcode:567777,coords: [ -11.80007, 13.1123456 ]},email:"techm@techm.com",mobiles:[7865452222]}}])
db.ProductCollection.insert([{ _id:6,item:"Bangles",prodCat :"Jewellery",price:4000.0,quantity: 1,orderInfo:{"_id":"O004","orderdate" : ISODate("2010-05-16"),address:{street:"Salt Lake",city:"Kolkata",state:"West Bengol",zipcode:222224,coords: [ -67.850007, 9.456666 ]},email:"vaishali@gmail.com",mobiles:[8888108850,9402312123]}}])
 ```


---

##### Note : a db won't be created if there are no collections within that db . So make sure to do `use dbname` then do `db.createCollection('colectionname');` 

---
operations on collections: (for shell) 

1.`db.<collectionName>.find({object with data}).toArray()`

2.`db.<collectionName>.find({object with data}).pretty()`

3.`db.<collectionName>.find({object with data}).count()`

4.`db.<collectionName>.findOne({object with data})`


---
#### Getting particular fields ( same as selec)


5.`db.<collectionName>.findOne({object with data},{name:1}).toArray()`


---
#### using Logical Query Operators

greater than operator

`db.cart.find({price:{$gt:10}}).pretty();`

or operator 

`db.cart.find({$or:[{name:"kurkure"},{name:"marie biscuit"}]}).pretty();`



---


Fetch product based on unique product id : 

```javascript
db.cart.find({$or:[{name:"kurkure"},{name:"marie biscuit"}]}).pretty();
```

---

Fetch product with given filter and show only required field data 

```javasrcipt
db.ProductCollection.find({_id:1},{name:1}).pretty();
```

---

Q. Fetch all product details except coord , email

**If your document is nested then u have to access each item individually**

Example : 


```javascript
{ _id: 1,
  item: 'Laptop',
  prodCat: 'Electronics',
  price: 30000,
  quantity: 2,
  orderInfo: 
   { _id: 'O001',
     orderdate: 2014-01-01T00:00:00.000Z,
     address: 
      { street: '66,Airoli',
        city: 'Mumbai',
        state: 'MS',
        zipcode: 700987,
        coords: [ -73.856077, 40.848447 ] },
     email: 'capgemini@capgemini.com',
     mobiles: [ 8888108810 ] } }

```

To access all without coords and email : 

**Note this: below syntax for the right argument works only in this case, this wont work for queries**

```javascript
db.collection('name').find({_id:1},{orderInfo:{email:0,address:{ coords:0}}})
```

Q. Find the product having   productType   as either “Electronics” OR “TV”

```javascript
db.ProductCollection.find({$or :[{productCat:"Electronics"},{item:"TV"}]})
```

Q.Show the list of those product having price greater than 40000.

```javascript
db.ProductCollection.find({price: {$gt:40000}})

```

Q.Find all documents which  are delivered in state “MS"

```javascript
db.ProductCollection.find({"orderInfo.address.state":"MS"})
```


---
**UPDATING VALUES**

* updating one document
```javascript
db.ProductCollection.updateOne({ _id: 1 }, { $set: { 'item': 'MacBookAir' , 'prodCat':'GamingPC' } })
```
* updating multiple documents

```javascript
db.ProductCollection.updateMany({_id:{$in:[1,2]}} , { $set: { 'item': 'MacBookAir' , 'prodCat':'GamingPC' } })
```

* `using upsert` : Additional field `upsert` , updates the existing document if the document is found , else a new document is generated with the values $set.
Below is an example of using upsert:

```javascript
db.ProductCollection.updateOne({_id:100}, { $set: { 'item': 'MacBookAir' , 'prodCat':'GamingPC' }} ,{upsert:true})
```

Q. Update the product price by 5000 for product name  “Laptop”

``` javascript
db.ProductCollection.updateOne({item:"Laptop"}, { $set: { 'price': 5000 }} ,{upsert:true})

```
**PUSH QUERY**

Q.Add one more mobile number in mobiles field of order information for order id  “2”

```javascript
db.ProductCollection.updateOne({_id:2},{$push:{'orderInfo.mobiles':9435001001}})

```

Q.Update the product price to “40.00 “and product category to “electronics”   for the product having item name “CD”. Insert the product if it is not existing.

```javascript
db.ProductCollection.updateOne({item:"CD"},{$set:{'price':40,'prodCat':'Electronics'}},{upsert:true})

```

**RENAMING FIELD VALUE**

Q.Rename “item” field  to “productName” in the above collection

```javascript
db.ProductCollection.updateMany({},{$rename:{'item':'productName'}})

```
Q.Find those products havine price >4000 and delivered in state “MS”

```javascript
db.ProductCollection.find({$and:[{price:{$gt:4000}},{'orderInfo.address.state':'MS'}]})

```

Q.Find List of all “electronics” delivered in city “Pune”

```javascript
db.ProductCollection.find({$and:[{prodCat:'Electronics'},{'orderInfo.address.city':'Pune'}]})

```


Q.Find the products document maching state in “MS”  OR “UP”.

```javascript
db.ProductCollection.find({$or:[{'orderInfo.address.state':'UP'},{'orderInfo.address.state':'MS'}]})
//Approach 2 : 

db.ProductCollection.find({"orderInfo.address.state":{"$in":["MS","UP"]}})

```

Q.Find those products havine price >4000 and delivered in state “MS”.

```javascript
db.ProductCollection.find({$and:[{'orderInfo.address.state':'MS'},{'price':{$gt:4000}}]})

```
Q.Find List of all “electronics” delivered in city “Pune”
```javascript
db.ProductCollection.find({'productName':'Electronics','orderInfo.address.city':'Pune'})
//approach 2 :using $and
db.ProductCollection.find({$and:[{'productName':'Electronics'},{'orderInfo.address.city':'Pune'}]})
```

**DELETING VALUES**
```javascript
db.ProductCollection.deleteOne({_id:1});
```

Q.Remove all products which product name  starts with "L"

```javascript
db.ProductCollection.deleteMany({'item':{$regex:/^L/}});
db.ProductCollection.deleteMany({'item':{$regex:'^L'}});
db.ProductCollection.deleteMany({'item':/^L/});
```
---

### AGGREGATION
creates a dummy table 

`$match` and `$group`
```javascript
db.ProductCollection.aggregate([{$match : {prodCat : "Electronics"}},{ $group : {_id : "$prodCat", total : {$sum : "$price"}}}])
```

_id is compulsary parameter is $group

---

**SORTING**
```javascript

db.ProductCollection.find({},{item:1,price:1}).sort({price:1})
  ```

**limitng values** (also used for Pagination)


```javascript
db.locations.find().sort({location:-1}).limit(2);
  ```
  *Note : if we have more than two parameters in the sort function , then we it will first check on the first item , if same  then will check for the second item* 

---

## Pagination
**`pagination uses skip and limit methods`**

```javascript
db.ProductCollection.find({},{item:1,price:1}).sort({price:1}).skip(0*2).limit(2);

db.ProductCollection.find({},{item:1,price:1}).sort({price:1}).skip(1*2).limit(2);

// sort by price in descending order and skip first 2 items and then limit (2) to show only two items 
```

*Note : limit() only displays an output and it doesnt return anything , so limit(2).skip(2) is same as skip(2).limit(2)*


```javascript

db.createCollection('trainees');
db.createCollection('training');
db.createCollection('trainer');

db.trainees.insertMany({_id:1,traineeId:1,fName:"tanveer",lname:"ahmed",Education:"B.Tech",gender:"male",age:23,homeTown:"Dhubri"},
{_id:2,traineeId:2,fName:"bishwaraj",lname:"paul",Education:"B.Tech",gender:"male",age:23,homeTown:"Silchar"},
{_id:3,traineeId:3,fName:"Sandeep",lname:"Shah",Education:"B.Tech",gender:"male",age:24,homeTown:"digboi"},
{_id:4,traineeId:4,fName:"KVN",lname:"Pranav",Education:"B.Tech",gender:"male",age:23,homeTown:"hyderabad"}]);

db.trainer.insert({_id:1,trainerId:1,trainerFName:"Manan",trainerLname:"xyz"});

db.training.insertOne({_id:1,trainingId:1,trainerId:1,traineeId:1,trainingStartDate:"05-07-2022"});trainingEndDate:"05-07-2022"},
{_id:2,trainingId:1,trainerId:1,traineeId:2,trainingStartDate:"05-07-2022",trainingEndDate:"05-07-2022"},
{_id:3,trainingId:1,trainerId:1,traineeId:3,trainingStartDate:"05-07-2022",trainingEndDate:"05-07-2022"},
{_id:4,trainingId:1,trainerId:1,traineeId:4,trainingStartDate:"05-07-2022"trainingEndDate:"05-07-2022"}]);
```

## Lookup

lookup is not same as join.
It's more like we are building a relation between two or more collections
```javascript
db.posts.aggregate([

  {$lookup:
  {
    from :"<secondcollection_name>",
    localField:"<field_in_posts>",
    foreignField:"<field_in_secondcollection>",
    as :"comments"
    }
  }
]);
```

db.training.aggregate([

  {$lookup:
  {
    from :"trainees",
    localField:"traineeId",
    foreignField:"traineeId",
    as :"details"
    }
  }
]);


**NOTE: by dafault lookup is left outer join**


To do a inner join just add $match to the pipeline to skip empty fields 

```javascript
db.getCollection('inventory').aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "sku",
            foreignField: "item",
            as: "inventory_docs"
        }
    },
    {
        $match: {
            "inventory_docs": {$ne: []}
        }
    }
])
```

---
To skip few fields


```javascript
db.training.aggregate([{ $lookup : {from : "trainees", localField : "traineeId", foreignField : "traineeId", as:"trainings offered", pipeline:[{ $project : {_id:0, age:0}}]}}]).pretty()

```

```javascript
db.training.aggregate([{ $lookup : {from : "trainees", localField : "traineeId", foreignField : "traineeId", as:"trainings offered", pipeline:[{ $project : {_id:0, age:0}}]}}])
```
to exclude fields

add project in pipeline query

pipeline:[{ $project : {_id:0, age:0}}] 

this part

---