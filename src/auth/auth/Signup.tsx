import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { postAction } from "../../store/postSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/login");
      dispatch(postAction.setIsLogin(false));
      alert(`Account successfully created Please Login Your Account"`);
    });
  };

  return (
    <div className="flex items-center justify-center mx-auto h-[96.5vh] image">
      <div className="flex items-center bg-white flex-col justify-center w-[400px] h-[400px] rounded shadow-lg mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-2 dark:text-black">
            Sign up to threads
          </h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center flex-col gap-6 w-full">
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
              <small className=" dark:text-black">
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
