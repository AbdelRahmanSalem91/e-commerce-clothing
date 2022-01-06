import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHC1AHFuJoAAfMyYFsg2d62tKEroL_CU0",
  authDomain: "e-comm-ab2d2.firebaseapp.com",
  databaseURL: "e-comm-ab2d2.firebaseio.com",
  projectId: "e-comm-ab2d2",
  storageBucket: "e-comm-ab2d2.appspot.com",
  messagingSenderId: "545660956528",
  appId: "1:545660956528:web:e936f4d5374d18082029b5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const db = getFirestore(app);

export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users`, userAuth.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};
