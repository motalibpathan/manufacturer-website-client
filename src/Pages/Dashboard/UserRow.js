import { faUserCheck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserRow = ({ user, index, setSelectedUser }) => {
  const { email, role } = user;
  return (
    <tr className="text-left">
      <th className="p-5 border">{index + 1}</th>
      <td className="p-5 border">{email}</td>
      <td className="p-5 border">
        {role === "admin" ? (
          <span className="border bg-green-50 py-2 px-5 rounded-lg">
            <FontAwesomeIcon className="mr-2" icon={faUserGear} /> Already Admin
          </span>
        ) : (
          <span className="border bg-red-50 py-2 px-5 rounded-lg ">
            <label
              htmlFor="admin-delete-modal"
              className="cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <FontAwesomeIcon className="mr-2" icon={faUserCheck} /> Make Admin
            </label>
          </span>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
