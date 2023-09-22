import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALb_sU-JLz6zH055Kr2yIgYtk7GK_JTxo",
  authDomain: "greenshop-v2.firebaseapp.com",
  projectId: "greenshop-v2",
  storageBucket: "greenshop-v2.appspot.com",
  messagingSenderId: "1042335816419",
  appId: "1:1042335816419:web:398dfc7794b29bb90503d6",
  measurementId: "G-L2HWVT86QT",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
export { signInWithGoogle };
