import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";


export const useAuth =()=>{
    return useContext(AuthContext);

}