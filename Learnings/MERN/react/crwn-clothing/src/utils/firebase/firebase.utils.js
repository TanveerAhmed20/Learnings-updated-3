// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

//
import {
  getFirestore,
  doc, // retreives docuemnts from firestore data base,
  getDoc, // get document data
  setDoc,
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwFY0TcMRKlX9nxEstDbcNUZ5TYaKuuuU",
  authDomain: "clothing-store-74b45.firebaseapp.com",
  projectId: "clothing-store-74b45",
  storageBucket: "clothing-store-74b45.appspot.com",
  messagingSenderId: "382225401197",
  appId: "1:382225401197:web:907db8690d816914a64664",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// intialize a provider , gives back provider instance

const googleProvider = new GoogleAuthProvider(); // returns a class

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); // this is fixed mandatory, tracks the authentication flow

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); // this may vary according to our needs, there can be signIn with popop or via redirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  if(!userAuth) return; 

  const userDocRef = doc(db, "users", userAuth.uid); //makes connectoin with the firbase database
  const userSnapShot = await getDoc(userDocRef); // retreives the document from the firebase
  console.log("INSIDE FIREBASE CREATEUSERDOCUMENT_AUTH");
  console.log(userSnapShot);
  console.log("USER_SNAPSHOT_EXIST?: ",userSnapShot.exists()); // returns true if userData or table is presenet in the database

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // notes the time of creation of data object
    try {
      // this step does the patch/put request using setDoc
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
        // if no additionalInfo is provided by the userAuth , then u do explicit dynamic update
      }); // so here we are trying to set the data into the getDoc using setDoc
    } catch (e) {
      console.log("error creating the user" + e.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return  signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async ()=> await signOut(auth);

// note : auth keeps tracking of who is signedIn right now

export const onAuthStateChangedListener = (callback)=>{
  return onAuthStateChanged(auth,callback);
}