import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Authentication/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState({});
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  // sign in with google
  const GoogleSignIn = (location, naviagte) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);

        saveUser(user?.email, user?.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        naviagte(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //--sign in with Email and password--//
  const signInWithEmailPass = (email, password, navigate, location) => {
    setIsLoading(true);
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        setError("");
        const destination = location?.state?.from || "/";
        console.log(user);

        if (user.emailVerified) {
          navigate(destination);
        } else {
          console.log("plase varify your email");
        }
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //--sign in with Email and password -process-end--//

  //--creating a new user -process-start--//
  const registerWithEmailPassword = (email, password, name) => {
    console.log("ok2");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newuser = { email, displayName: name };

        varifyEmail();
        setUser(newuser);
        saveUser(email, password, name, "POST");
        console.log(result.user);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
          // photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };
  //--created a new user -process-end--//

  //--varifying -email -process-start--//
  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //varified email -process end--/

  //--observe user Presence start--//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  //--observe user Presence end--//

  //--logout processing start--//
  const logout = () => {
    signOut(auth)
      .then(() => {
        setSuccess("Logout Successfully Done");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //--logout processing end--//

  const saveUser = (email, password, displayName, method) => {
    const user = { email, password, displayName };
    fetch("https://pure-plains-03469.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    GoogleSignIn,
    registerWithEmailPassword,
    logout,
    signInWithEmailPass,
    setIsLoading,
    user,
    success,
    error,
    isLoading,
  };
};

export default useFirebase;
