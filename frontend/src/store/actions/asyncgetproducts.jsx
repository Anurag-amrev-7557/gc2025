import axios from "axios";
import { getProducts } from "../slices/productSlice";


export const asyncgetproducts = () => async(dispatch,getState) =>{
    const backendUrl = import.meta.env.VITE_BACKEND;
    const token=localStorage.getItem("token");
    

    console.log(backendUrl,token);
    try{
        console.log(`${backendUrl}/products/listproducts`)   
        const response=await axios.post(`${backendUrl}/api/products/listproducts`)             
        console.log(response);
        dispatch(getProducts(response.data));
    }
    catch(error){
        console.log(error);
    }
}
