import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCu2dePxT5Sogs79LMoHsP07c4OIsy083w",
  authDomain: "hireworkrz.firebaseapp.com",
  projectId: "hireworkrz",
  storageBucket: "hireworkrz.firebasestorage.app",
  messagingSenderId: "371503336398",
  appId: "1:371503336398:web:f3af12129b4de12c20f99f",
  measurementId: "G-2XCK9Y1DLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    return result.user; // Returns user data
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth, signInWithGoogle, logout };
