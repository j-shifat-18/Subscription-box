import React, { use } from "react";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const UserProfile = ({ user }) => {
  const {updateUserInfo } = use(AuthContext);
  const handleUpdateProfile = (e) => {
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(name ,photo)
    updateUserInfo({displayName:name , photoURL:photo})
    .then(()=>{
      toast.success('Profile Updated Successfully');
    })
    .catch(error=>{console.log(error.message)});
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl  border-2 border-slate-300">
        <div className="text-center">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{user.displayName}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <h2 className="max-w-md mx-auto font-bold text-3xl mt-10">
        Update Profile
      </h2>
      <form
        onSubmit={handleUpdateProfile}
        className="max-w-md mx-auto mt-2  bg-gray-50 p-6 rounded-2xl border-2 border-slate-300"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            placeholder="Your Name"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Photo URL</label>
          <input
            name="photo"
            placeholder="Photo URL"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
