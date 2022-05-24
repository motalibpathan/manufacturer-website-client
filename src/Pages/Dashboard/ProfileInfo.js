import React from "react";

const ProfileInfo = ({ user, currentUser, setEditable }) => {
  return (
    <div className="bg-white lg:p-10 p-5 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
        <div>
          <p className="mb-2">Full Name</p>
          <h3 className="font-semibold">{user?.displayName}</h3>
        </div>
        <div>
          <p className="mb-2">Email Address</p>
          <h3 className="font-semibold">{currentUser?.email}</h3>
        </div>
        <div>
          <p className="mb-2">Phone number</p>
          <h3 className="font-semibold">
            {currentUser.phone ? currentUser.phone : "Not set"}
          </h3>
        </div>
        <div>
          <p className="mb-2">Education</p>
          <h3 className="font-semibold">
            {currentUser.education ? currentUser.education : "Not available"}
          </h3>
        </div>
        <div>
          <p className="mb-2">City / District</p>
          <h3 className="font-semibold">
            {currentUser.location ? currentUser.location : "Not available"}
          </h3>
        </div>
        <div>
          <p className="mb-2">Linkedin</p>
          <h3 className="font-semibold">
            {currentUser.linkedin ? currentUser.linkedin : "Not available"}
          </h3>
        </div>
      </div>
      <button
        onClick={() => {
          setEditable(true);
        }}
        className="btn btn-success mt-5"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileInfo;
