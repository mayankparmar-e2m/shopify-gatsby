import { Link, navigate } from 'gatsby';
import React, { useState } from 'react'
import clientApollo from '../../utils/clientApollo';
import { CUSTOMER_RECOVER } from '../../storeQueries/mutation/customer/customerRecover';

export default function Recover() {
    const [recoverInput, setRecoverInput] = useState({
        email: "",
        email_error: false,
      });
      const [desableBtn,setDesableBtn]=useState(false)
      const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const errField = `${name}_error`
        setRecoverInput((prevState) => {
          return {
            ...prevState,
            [name]: value,
            [errField]: false,
        
    
          }
        })
      }
      const formSubmitHandler=async()=>{
       const recover=await clientApollo.mutate({
            mutation:CUSTOMER_RECOVER,
            variables:{
                email:recoverInput.email
            }
        })
        if(recover?.data?.customerRecover?.customerUserErrors?.length <= 0){
            navigate("/account/login")
        }
      }
  return (
    <div className='recover-page pt-24 pb-14'>
    <div className="login-wrapper px-4 max-w-[325px] lg:max-w-[435px] w-full mx-auto">
      <h1 className="text-center my-4 text-[24px] lg:text-[32px] text-[#000000] font-bold">Reset your password</h1>
         <p className="text-[14px] lg:text-[18px] text-center font-normal text-[#000000] mb-6 ">We will send you an email to reset your password.</p>
      <div className="login-form-wrapper" >
        <div className=" my-9">
          <input type="text" name="email" onChange={onChangeHandler} value={recoverInput.email} className={`mb-4 font-normal w-full  border-b text-[16px] border-solid border-[#ccc] py-[10px] px-[15px] outline-none ${recoverInput.email_error && "border-red-600"}`} placeholder="Email" />
          <p className={`text-red-500 text-xs  mt-[-10px] mb-[10px] `} style={{ display: recoverInput.email_error ? "block" : "none" }}>Please enter a valid email</p>
        </div>
        <div className=" flex items-center justify-around gap-[30px]">
          <button className="text-[18px] text-white w-full rounded-[100px] font-bold bg-[#505af0] py-2 lg:py-3" onClick={() => formSubmitHandler()}>{desableBtn?"Loading...":"Submit"}</button>
          <Link to="/account/login" className="block text-center text-[18px] rounded-[100px] text-white w-full  font-bold bg-[#505af0] py-2 lg:py-3">Cancel</Link>
        </div>
      </div>

    </div>
  </div>
  )
}
