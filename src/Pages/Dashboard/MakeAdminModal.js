import React from "react";
import { toast } from "react-toastify";

const MakeAdminModal = ({ selectedUser, setSelectedUser, refetch }) => {
  const { email } = selectedUser;

  const handleMakeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
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
      <input type="checkbox" id="admin-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure?</h3>
          <p class="py-4">
            Confirm <span className="text-success font-bold">{email}</span> as
            an admin!
          </p>
          <div class="modal-action">
            <label
              onClick={() => setSelectedUser(null)}
              for="admin-delete-modal"
              class="btn btn-error"
            >
              Cancel
            </label>
            <label
              onClick={() => handleMakeAdmin(email)}
              for="admin-delete-modal"
              class="btn btn-success"
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
