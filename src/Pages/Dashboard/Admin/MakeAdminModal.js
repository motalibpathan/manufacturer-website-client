import React from "react";
import { toast } from "react-toastify";

const MakeAdminModal = ({ selectedUser, setSelectedUser, refetch }) => {
  const { email } = selectedUser;

  const handleMakeAdmin = (email) => {
    fetch(`https://spadex-tools.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin!");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="admin-delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            Confirm <span className="text-success font-bold">{email}</span> as
            an admin!
          </p>
          <div className="modal-action">
            <label
              onClick={() => setSelectedUser(null)}
              htmlFor="admin-delete-modal"
              className="btn btn-error"
            >
              Cancel
            </label>
            <label
              onClick={() => handleMakeAdmin(email)}
              htmlFor="admin-delete-modal"
              className="btn btn-success cursor-pointer"
            >
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdminModal;
