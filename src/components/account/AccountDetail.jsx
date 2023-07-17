import React from 'react'
import useCustomer from '../../hooks/useCustomer'
import useIsCustomerLogin from '../../hooks/useIsCustomerLogin'

export default function AccountDetail() {
const {customer,customerLoader} =useCustomer()
const {logOut}= useIsCustomerLogin()
  return (
    <div className='account-detail'>
       {
        customerLoader ?<h1>Loading...</h1>:<div className='container'>
            <h1>Wellcome {customer?.firstName} {customer?.lastName}</h1>
            <h1>Email {customer?.email}</h1>
            <h1>mobile {customer?.phone}</h1>
            <button onClick={()=>logOut()}>logout</button>
            </div>
       }
        
    </div>
  )
}
