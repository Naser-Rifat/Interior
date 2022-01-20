import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Authentication/firebase.init";


initializeAuthentication()


 const useFirebase = () => {

     const [error, setError] = useState(false);
const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);


    const [user,setUser]=useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

  // sign in with google
    const GoogleSignIn = (location,naviagte) => {
        // setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                
                 saveUser(user?.email, user?.displayName, 'PUT')
                setError('')
                const destination = location?.state?.from || '/';
                naviagte(destination);

            }).catch((error) => {

                setError(error.message);

            })
            // .finally(() => setIsLoading(false));
    }
    

    //sign in with Email and password
    const signInWithEmailPass =(email,password,navigate,location)=>{
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setUser(user);
            setError('');
            const destination = location?.state?.from || "/";
            console.log(user);

            if(user.emailVerified){

            navigate(destination)

        }

        else{
            console.log("plase varify your email");
        }
            // ...
        })
        .catch((error) => {
            setError(error.message);
     });

   

    }


    // create a new user 
      const registerWithEmailPassword=( email,password, name)=>{
       
         console.log("ok2");
         
       
            createUserWithEmailAndPassword(auth, email,password)
            .then((result) => {
                const newuser={email,displayName:name}
              
                varifyEmail()
                setUser(newuser);
                saveUser(email, password,name, 'POST')
                console.log(result.user);
                setError('')
                updateProfile(auth.currentUser, {
                    displayName: name
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

               
            
              })
              .catch((error) => {
                setError(error.message);
                // ..
              });
            
    
      }
      const varifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then((result) => {
         console.log(result);
        })
        .catch((error) => {
            setError(error.message)
          });
      
      }
    
      //observe user Presence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
            else {
                setUser({})

            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])


      const logout=()=>{
        signOut(auth).then(() => {
            setSuccess('Logout Successfully Done')
          }).catch((error) => {
            setError(error.message)
          });
      }


      const saveUser = (email, password, displayName, method) => {
        const user = { email, password,displayName }
        fetch("http://localhost:8000/user", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }



    return {
        GoogleSignIn,
        registerWithEmailPassword,
        logout,
        signInWithEmailPass,
        user,
        success,
        error
    }
    
    
};

export default useFirebase;
