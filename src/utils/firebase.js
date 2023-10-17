import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc,  getDoc, setDoc} from 'firebase/firestore'
    
const firebaseConfig = {
  apiKey: "AIzaSyAWjkaGaFKaA82cnyJUFVOvE7_QrVgqAaU",
  authDomain: "task91-3960b.firebaseapp.com",
  projectId: "task91-3960b",
  storageBucket: "task91-3960b.appspot.com",
  messagingSenderId: "80068591612",
  appId: "1:80068591612:web:a6846a702d56fd1adbfc79",
  measurementId: "G-11X4R6YSN0"
};


  const firebaseapp = initializeApp(firebaseConfig);
  const provider= new GoogleAuthProvider();
 
  provider.setCustomParameters({
  prompt:"select_account"
});
  
  export const auth=getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)
  export const db =getFirestore();
  export const createuserdocfromAuth = async(userAuth, additionalInformation ={}) =>

{
  if(!userAuth.email) return;

  const userDocRef=doc (db, 'users', userAuth.uid);
  console.log(userDocRef)


const userSnapShots = await getDoc(userDocRef);
console.log(userSnapShots)
console.log(userSnapShots.exists())

if(!userSnapShots.exists())
{
   const {displayName, email} =userAuth
   const createdAt = new Date();
   try{
    await setDoc(userDocRef,{
   displayName,
   email,
   createdAt,
   ...additionalInformation
    })
  }
    catch(error){
    console.log('error in creating', error.message)
    }

   }
   return userDocRef;
}

export async function createAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await createUserWithEmailAndPassword(auth,email,password)
}

export async function signinAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await signInWithEmailAndPassword(auth,email,password)
}

