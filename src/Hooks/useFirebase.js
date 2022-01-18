import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Authentication/firebase.init";


initializeAuthentication()


 const useFirebase = () => {

    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [success, setSuccess] = useState(false);


    const [user,setUser]=useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const GoogleSignIn = (location,naviagte) => {
        // setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                // saveUser(user?.email, user?.displayName, 'PUT')
                // setError('')
                // const destination = location?.state?.from || '/';
                // history.replace(destination);

            }).catch((error) => {

                console.log(error.message);

            })
            // .finally(() => setIsLoading(false));
    }
    return {
        GoogleSignIn,
        user
    }
       
    
};

export default useFirebase;
