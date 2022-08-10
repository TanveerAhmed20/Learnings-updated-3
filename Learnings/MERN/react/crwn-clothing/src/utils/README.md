# Firebase Basics

**NOTE** : `make sure you change rules in the firebase firestore Rules as follows before advancing into the code for developement`

```javascript 
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; //default : false
    }
  }
}
```

### Understanding Authentication Flow

CRUD : Create - Read - Update - Delete


`Step 1: ` User request to sign in with his google credentials : `email` and `password`

`Step 2:` Google authenticates the credentials and generates an `auth_token` for successful authentication

auth_token is a hash value which incudes data about the successful authentication

`Step 3` : user receives the Auth_token from google and sends it to firebase database

`step 4` : Firebase sends the received auth_token to google.com to verify the auth_token  

`step 5` : If auth_token is valid then google.com will send verification_token to firebase which confirms that auth_token is valid

`step 6` : firebase generates access_token `(this defines which part of database does the user has access to)` and sends the access_token to the user

`step 7:` User sends the access_token along with CRUD requests details to firebase

`step 8` : firebase confirms the access_token and then performs the CRUD request and sends back a CRUD response to the user , `in case CRUD failed still a response is sent back`




