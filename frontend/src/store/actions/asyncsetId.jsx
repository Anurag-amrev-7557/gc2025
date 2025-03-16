import axios from "axios";
import { setUserId } from "../slices/userIdSlice";

export const asyncsetId = () => async (dispatch,getState) => {
    const backendUrl = import.meta.env.VITE_BACKEND;
    const token=localStorage.getItem("token");
    try{
       
    }
    catch(error){
        console.error("Error in asyncsetId",error);
    }
}
