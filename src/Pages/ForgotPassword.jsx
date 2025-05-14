import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email)
    resetPassword(email)
    .then(()=>{
      toast.success('Password reset mail sent');
    })
    .catch((error)=>console.log(error));
  };
  return (
    <div className="hero  min-h-screen">
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Reset Password
          </h2>
          <form onSubmit={handleResetPassword} className="fieldset space-y-3">
            <label className="label font-semibold text-xl">Email</label>
            <input
              name="email"
              required
              type="email"
              className="input border-none bg-base-300"
              placeholder="Enter your email address"
            />
            <button className="btn btn-neutral mt-4">
              Send verification email
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ForgotPassword;
