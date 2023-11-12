import React, { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import { UserCircle2, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { editUserProfile, getSingleProfile } from "../utils/api";

export default function EditProfile() {
  const { id } = useParams();
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [profile, setProfile] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProfile(`${id}`).then((res) => {
      const { username, fullName } = res;
      setFullName(fullName);
      setUsername(username);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editUserProfile(`${id}`, fullName, username).then((res) => {
      alert("Profile Update Successfully");
      navigate("/profile");
    });
  };

  return (
    <Modal>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex items-start mx-auto justify-between flex-col gap-4 bg-white w-[500px] h-auto rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Edit Your Profile</h1>
            <X
              className="ml-[280px] cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="flex items-center justify-between flex-col mx-auto gap-4 w-[460px]">
            <UserCircle2 size={80} />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setProfile(e.target.files?.[0]);
              }}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
            <Input
              crossOrigin="true"
              className="border  p-4 text-black text-sm rounded-lg"
              onChange={(e) => setFullName(e.target.value)}
              label="fullName"
              value={fullName}
            />
            <Input
              crossOrigin="true"
              className="border p-4 text-black text-sm rounded-lg"
              onChange={(e) => setUsername(e.target.value)}
              label="username"
              value={username}
            />
            <button className="px-6 py-3 text-sm  bg-black text-white rounded w-full">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
