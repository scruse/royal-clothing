import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx564ajEC-1K7sMqfPhCYwCuH494ZA-TA",
    authDomain: "royal-clothing-db-7b769.firebaseapp.com",
    projectId: "royal-clothing-db-7b769",
    storageBucket: "royal-clothing-db-7b769.appspot.com",
    messagingSenderId: "40837772175",
    appId: "1:40837772175:web:beaea0fc979da6092d51fa"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);  

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    //if user data exists
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                // cart: {
                //     items: []
                // }
            })
        }
         catch(err){
             console.log('error creating user', err.message);
         }


    }

    //if user data != exists

    //return user date
    return userDocRef;
}