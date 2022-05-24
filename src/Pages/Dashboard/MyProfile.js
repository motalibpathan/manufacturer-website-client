import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ProfileInfo from "./ProfileInfo";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: currentUser,
    isLoading,
    refetch,
  } = useQuery(["user", user], () =>
    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const [editable, setEditable] = useState(false);
  const [updating, setUpdating] = useState(false);

  if (loading || updating || isLoading) {
    return <Loading />;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdating(true);
    const phone = e.target.phone.value;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const linkedin = e.target.linkedin.value;

    const userInfo = {
      phone,
      education,
      location,
      linkedin,
    };

    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          setEditable(false);
          toast.success("Update success");
          setUpdating(false);
        } else {
          toast.success("Update Failed");
          setUpdating(false);
        }
      });
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-5">My profile</h1>
      {!editable ? (
        <ProfileInfo
          user={user}
          currentUser={currentUser}
          setEditable={setEditable}
        />
      ) : (
        <form
          onSubmit={handleUpdate}
          className="bg-white lg:p-10 p-5 rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3">
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
              <input
                type="text"
                name="phone"
                placeholder="Your phone"
                class="input input-bordered input-success w-full max-w-xs border-2"
              />
            </div>
            <div>
              <p className="mb-2">Education</p>
              <input
                type="text"
                name="education"
                placeholder="Your education"
                class="input input-bordered input-success w-full max-w-xs border-2"
              />
            </div>
            <div>
              <p className="mb-2">City / District</p>
              <input
                type="text"
                name="location"
                placeholder="Your Address"
                class="input input-bordered input-success w-full max-w-xs border-2"
              />
            </div>
            <div>
              <p className="mb-2">Linkedin</p>
              <input
                type="text"
                name="linkedin"
                placeholder="Your Linkedin profile link"
                class="input input-bordered input-success w-full max-w-xs border-2"
              />
            </div>
          </div>
          <input
            type="submit"
            value={"Update"}
            className="btn btn-success mt-5 mr-3"
          />
          <input
            type="reset"
            onClick={() => setEditable(false)}
            className="btn btn-error mt-5"
            value={"Cancel"}
          />
        </form>
      )}
    </div>
  );
};

export default MyProfile;
