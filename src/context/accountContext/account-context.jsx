import React, { useReducer, createContext, useEffect } from "react";
import accountReducer from "./accountReducer";
import { accountActionsTypes } from "./accountActionTypes";
import clientApollo from "../../utils/clientApollo";
import { SET_CUSTOMER_DATA } from "../../storeQueries/query/customer/customer";
import { getCookies } from "../../utils/helper";
import { navigate } from "gatsby";
const defaultValues={
    customer:null,
    customerLoader:false
}
export const AccountContext=createContext();
const isBrowser = typeof window !== `undefined`;
const cookieKey = `shopify_cat`;
export const AccountProvider=({ children })=>{
    const [state, dispatch] = useReducer(accountReducer, defaultValues);
    const setCustomerData=(customerData)=>{
        dispatch({
            type:accountActionsTypes.FETCH_CUSTOMER_DATA,
            payload:customerData
        })
    }
    const fetchCustomerData=async()=>{
        dispatch({
            type:accountActionsTypes.CUSTOMER_LOADER,
            payload:true
        })
        if(!getCookies(cookieKey)){
            navigate("/account/login")
            return
        }
        
       const customerData= await clientApollo.query({
            query:SET_CUSTOMER_DATA,
            variables:{
                customerAccessToken:isBrowser && getCookies(cookieKey)?getCookies(cookieKey) : null
            }
        })
        if(customerData?.data?.customer){
            setCustomerData(customerData?.data?.customer)
        }
        dispatch({
            type:accountActionsTypes.CUSTOMER_LOADER,
            payload:false
        })
    }
    useEffect(()=>{
        fetchCustomerData()
    },[])
    return <AccountContext.Provider value={state}>{children}</AccountContext.Provider>
}