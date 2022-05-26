import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import MakeAdminModal from "./MakeAdminModal";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://spadex-tools.herokuapp.com/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold my-3"> Make Admin </h1>
      <div className="overflow-x-auto bg-white">
        <table className="table w-full ">
          <thead className="text-left">
            <tr>
              <th className="capitalize text-md">#</th>
              <th className="capitalize text-md">Email</th>
              <th className="capitalize text-md">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                setSelectedUser={setSelectedUser}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <MakeAdminModal
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default MakeAdmin;
