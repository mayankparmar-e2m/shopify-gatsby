
import  { useContext } from "react"
import {AccountContext} from '../context/accountContext/account-context'

const useCustomer = () => {
   const {customer,customerLoader}= useContext(AccountContext);
    return {customerLoader,customer}
  }
  export default useCustomer