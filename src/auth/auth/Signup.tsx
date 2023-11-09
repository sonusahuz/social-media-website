import React, { useState } from "react";
import { register } from "../appwrite";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { postAction } from "../../store/postSlice";
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(email, password, name).then((acount) => {
      console.log(acount);
      navigate("/login");
      dispatch(postAction.setIsLogin(false));
      alert(`Account successfully created with ID ${acount.$id}"`);
    });
  };
  return (
    <div className="flex items-center justify-center mx-auto h-screen">
      <div className="flex items-center bg-white flex-col justify-center w-[400px] h-[440px] rounded shadow-lg mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-2">Sign up to threads</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center flex-col gap-6">
              <Input
                crossOrigin="true"
                size="lg"
                type="text"
                className="border w-[350px] text-sm rounded font-normal"
                label="FullName"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Input
                crossOrigin="true"
                size="lg"
                type="text"
                className="border w-[350px] text-sm rounded font-normal"
                label="Email "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                crossOrigin="true"
                size="lg"
                type="password"
                className="border w-[350px] text-sm rounded font-normal"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="w-[350px] bg-black text-white p-3 rounded">
                Sign up
              </button>
              <small>
                Already have an account{" "}
                <NavLink className="font-bold" to={"/login"}>
                  Login
                </NavLink>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
