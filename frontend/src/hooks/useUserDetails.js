import { useState } from "react";
import useUpdateFeaturedPostAndStatus from "./useUpdateFeaturedPostAndStatus";

const useUserDetails = () => {
  const [newRole, setNewRole] = useState("");
  const [block, setBlock] = useState("");
  const [newTeamMember, setNewTeamMember] = useState("");

  const { handleChangeTrueFalse, handleLitleFetchChange } =
    useUpdateFeaturedPostAndStatus();

  const handleTeamMember = async (e, _id) => {
    setNewTeamMember(e.target.value, _id);
    console.log(newTeamMember, e.target.value, '22', _id);
    const a = await handleChangeTrueFalse(
      `/api/v1/users/promote/members/${_id}`
    );
    console.log(a);
  };

  const handleRoleChange = async (e, _id) => {
    setNewRole(e.target.value, _id);
    console.log(newRole, e.target.value, '22');
    const res = await handleLitleFetchChange(`/api/v1/users/role/${_id}`, {
      role: newRole,
    });
    console.log(res);
  };

  const handleBlock = async (_id) => {
    console.log(_id);
    const res = await handleChangeTrueFalse(
      `/api/v1/users/block-unblock/${_id}`
    );
    setBlock((prev) => !prev); // Toggle between true and false
    console.log(res);
  };

  console.log(block);

  return {
    newRole,
    setNewRole,
    block,
    setBlock,
    handleBlock,
    handleTeamMember,
    handleRoleChange,
    newTeamMember,
    setNewTeamMember,
  };
};

export default useUserDetails;
