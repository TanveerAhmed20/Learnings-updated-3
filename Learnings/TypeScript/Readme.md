# Typescript Basics 
---

one time setup
`npm install -g typescript ts-node` 


ts-node is used to compile the typscript files in our console directly

`tsc -- help` : shows you all the commands available 

`ts-node tsfile.ts` : runs the ts file and gives output in the console


### When to use Type annotations:
* when a function returns the 'any' ty pe and we need to clarity the value
* WHen we declare a variable on one line then initialize it later 
* WHen we want a variable to have type that can't be inferred 


### WHy do we care? 

* TS cando type inference when extraciting values from an array 
* TS can prevent us  from adding incompataible valeus to the array 
* We can get help with 'map'for each , reduce , functions 
* Flexible arrays can still contain multiple different types


---
#### Multiple Types in array 
```typescript
const importantDates:(Date|string)[]= [];
```
---
#Tuples 

``` typescript
const pepsi: [string,boolean,number] = ['brown',true,40];
```
Another approach to tuples vis to use type alliases 

```typescript
type Drink = [string,boolean,number];
```

So intead we write : 
```typescript
const pepsi : Drink  = ['brown',true,40];
```
---
### INTERFACES + CLASSES  = HOW WE GET REALLY STRONG CODE RESUSE IN TS

what is interfaces: 

creates a new type, describing the property names and value types of an object 



---
### Tool to help us run typescript in the browser

`npm install -g parcel-bundler`