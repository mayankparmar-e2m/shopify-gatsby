
import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
export default function RegisterPage() {
  const [registerInput, setRegisterInput] = useState({
    fullName: "",
    fullName_error: "",
    email: "",
    email_error: false,
    password: "",
    password_error: false,
    hasSubmitError: false,
    phone: "",
    phone_error: "",
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
  const formSubmitHandler =  (e) => {
    e.preventDefault();
    const {fullName,email,password,phone}=registerInput;
    const fullNameHavespace=fullName.lastIndexOf(" ")?true:false
    let firstName = fullNameHavespace ?fullName.slice(0, fullName.lastIndexOf(" ") + 1).trim():fullName
    let lastName =fullNameHavespace
          ? fullName.slice(fullName.lastIndexOf(" ") + 1)?.trim()
          : null;
  };

  return (
    <div className="register-page pt-24 pb-14">
      <div className="login-wrapper px-4 max-w-[325px] lg:max-w-[435px] w-full mx-auto">
        <h1 className="text-center my-4 text-[24px] lg:text-[42px] text-font_color font-bold">
          Hello Stranger!
        </h1>
        {registerInput.hasSubmitError && (
          <div className="login-error bg-[#ecfef0] p-1 lg:p-2 border border-solid border-red-600 mb-4">
            <p className="text-[16px] text-font_color text-center">
              {registerInput?.registerErrorMessage}
            </p>
          </div>
        )}
        <form onSubmit={(e) => formSubmitHandler(e)} className="login-form-wrapper">
          <div className="register-form-input mb-4">
            <div className=" relative">
              <input
                type="text"
                name="fullName"
                onChange={onChangeHandler}
                id="fullName"
                value={registerInput.fullName}
                className={`peer pb-0 h-12 font-normal w-full border text-[16px] border-solid border-[#ccc] py-[11px] px-[15px] outline-none rounded ${
                  registerInput.fullName_error && "border-red-600"
                }`}
              />
              <label
              htmlFor="fullName"
                className={`block text-[14px] leading-[1.3] font-normal text-color_placeholder transition-all duration-300 absolute w-full left-0 top-1/2 -translate-y-1/2 pl-3.5 pointer-events-none m-0 peer-focus:text-[10px] peer-focus:top-1/4 peer-focus:text-color_gray38 peer-invalid:text-[10px] peer-invalid:top-1/4 peer-invalid:text-color_gray38 ${
                  registerInput.fullName.length > 0 &&
                  "top-1/4 !text-color_gray38 text-[10px]"
                }`}
              >
                Full name
              </label>
            </div>
            <p
              className={`text-red-500 text-xs mb-[10px] pt-1.5 `}
              style={{
                display: registerInput.fullName_error ? "block" : "none",
              }}
            >
              Please enter first name & last name
            </p>
          </div>
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
          <div className="register-form-input mb-4">
            <div className=" relative">
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={onChangeHandler}
                value={registerInput.phone}
                className={`peer  pb-0 h-12  font-normal w-full border text-[16px] border-solid border-[#ccc] py-[11px] px-[15px] outline-none rounded ${
                  registerInput.phone_error && "border-red-600"
                }`}
              />
              <label
              htmlFor="phone"
                className={`block text-[14px] leading-[1.3] font-normal text-color_placeholder transition-all duration-300 absolute w-full left-0 top-1/2 -translate-y-1/2 pl-3.5 pointer-events-none m-0 peer-focus:text-[10px] peer-focus:top-1/4 peer-focus:text-color_gray38 peer-invalid:text-[10px] peer-invalid:top-1/4 peer-invalid:text-color_gray38 ${
                  registerInput.phone.length > 0 &&
                  "top-1/4 !text-color_gray38 text-[10px]"
                }`}
              >
                Phone number
              </label>
            </div>
            <p
              className={`text-red-500 text-xs pt-1.5 mb-[10px] `}
              style={{
                display: registerInput.phone_error ? "block" : "none",
              }}
            >
              Please enter a valid mobile number
            </p>
          </div>
          <div className="register-form-input relative mb-6">
            <button
              className="text-[16px] text-white w-full rounded font-normal bg-black py-3"
               type="submit"
            >
              { "Sign up"}
            </button>
          </div>
        </form>
        <div className="sign-up-wrapper">
          <div className="sign-up-wrapper flex justify-center items-center">
            <p className="text-[16px] font-medium text-gray-300 ">
              Already a user ?{" "}
            </p>
            <Link
              to="/account/login"
              className="text-blue-500 cursor-pointer text-[16px] font-medium"
            >
              {" "}
              Sign In
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}
