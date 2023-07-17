
import { Link, navigate } from "gatsby";
import React from "react";
import { useState } from "react";
import clientApollo from "../../utils/clientApollo";
import { CREATE_CUSTOMER_ACCESSTOKEN } from "../../storeQueries/mutation/customer/createCustomerAccessToken";
import { dayDiffInFromTodayDate, setCookies } from "../../utils/helper";
import Layout from "../../components/global/Layout";
export default function RegisterPage() {
  const [registerInput, setRegisterInput] = useState({
    email: "",
    email_error: false,
    password: "",
    password_error: false,
    registerErrorMessage: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const errField = `${name}_error`;
    setRegisterInput((prevState) => {
        return {
          ...prevState,
          [name]: value,
          [errField]: false,
        };
      });
  };
  const formSubmitHandler =  async(e) => {
    e.preventDefault();
    const {email,password}=registerInput;
      try {
        const createCustomerAccessToken=await clientApollo.mutate({
          mutation:CREATE_CUSTOMER_ACCESSTOKEN,
          variables:{
            input: {
              email: email,
              password: password
            }
          }
        })
        if(createCustomerAccessToken?.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken){
          const customerAccessToken= createCustomerAccessToken?.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken
          const expiresAt=createCustomerAccessToken?.data?.customerAccessTokenCreate?.customerAccessToken?.expiresAt
          const tokenExpireInDays=dayDiffInFromTodayDate(expiresAt)
          setCookies("shopify_cat",customerAccessToken,tokenExpireInDays)
          navigate('/account')
        }
      } catch (error) {
        console.log(error,'errorerror')
      }
  };

  return (
    <Layout>
    <div className="register-page pt-24 pb-14">
      <div className="login-wrapper px-4 max-w-[325px] lg:max-w-[435px] w-full mx-auto">
        <h1 className="text-center my-4 text-[24px] lg:text-[42px] text-font_color font-bold">
          Hello Stranger!
        </h1>
        <form onSubmit={(e) => formSubmitHandler(e)} className="login-form-wrapper">
          <div className="register-form-input mb-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                onChange={onChangeHandler}
                id="email"
                value={registerInput.email}
                className={`peer pb-0 h-12 font-normal w-full border text-[16px] border-solid border-[#ccc] py-[11px] px-[15px] outline-none rounded ${
                  registerInput.email_error && "border-red-600"
                }`}
              />
              <label
              htmlFor="email"
                className={`block text-[14px] leading-[1.3] font-normal  text-color_placeholder transition-all duration-300 absolute w-full left-0 top-1/2 -translate-y-1/2 pl-3.5 pointer-events-none m-0 peer-focus:text-[10px] peer-focus:top-1/4 peer-focus:text-color_gray38 peer-invalid:text-[10px] peer-invalid:top-1/4 peer-invalid:text-color_gray38 ${
                  registerInput.email.length > 0 &&
                  "top-1/4 !text-color_gray38 text-[10px]"
                }`}
              >
                Email
              </label>
            </div>
            <p
              className={`text-red-500 text-xs  pt-1.5 mb-[10px] `}
              style={{
                display: registerInput.email_error ? "block" : "none",
              }}
            >
              Please enter a valid email
            </p>
          </div>
          <div className="register-form-input mb-4">
            <div className="relative">
              <input
                type={`${"password"}`}
                name="password"
                id="password"
                onChange={onChangeHandler}
                value={registerInput.password}
                className={`peer pb-0 h-12  font-normal w-full border text-[16px] border-solid border-[#ccc] py-[11px] px-[15px] outline-none rounded ${
                  registerInput.password_error && "border-red-600"
                }`}
              />

              <label
              htmlFor="password"
                className={`block text-[14px] leading-[1.3] font-normal text-color_placeholder transition-all duration-300 absolute w-full left-0 top-1/2 -translate-y-1/2 pl-3.5 pointer-events-none m-0 peer-focus:text-[10px] peer-focus:top-1/4 peer-focus:text-color_gray38 peer-invalid:text-[10px] peer-invalid:top-1/4 peer-invalid:text-color_gray38 ${
                  registerInput.password.length > 0 &&
                  "top-1/4 !text-color_gray38 text-[10px]"
                }`}
              >
                Password
              </label>
            </div>
            {registerInput.password_error && (
              <p
                className={`text-red-500 text-xs pt-1.5 mb-[10px] `}
                style={{
                  display: registerInput.password_error ? "block" : "none",
                }}
              >
                {registerInput.password_error}
              </p>
            )}
          </div>
          <div className="register-form-input relative mb-6">
            <button
              className="text-[16px] text-white w-full rounded font-normal bg-black py-3"
               type="submit"
            >
              { "Login"}
            </button>
          </div>
        </form>
        <div className="forget-password ">
                                <Link to="/account/recover" className="text-[16px] font-normal text-color_gray38">Forgot Password ?</Link>
                            </div>
        <div className="sign-up-wrapper">
          <div className="sign-up-wrapper flex justify-center items-center">
            <p className="text-[16px] font-medium text-gray-300 ">
            Not a user yet?{" "}
            </p>
            <Link
              to="/account/register"
              className="text-blue-500 cursor-pointer text-[16px] font-medium"
            >
              {" "}
            Sign Up
            </Link>
          </div>
        </div>
      </div>
     
    </div>
    </Layout>
  );
}
