import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { postAction } from "../../store/postSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((acount) => {
      dispatch(postAction.setIsLogin(true));
      navigate("/");
      alert(`Login Sucessfully`);
    });
  };
  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <div className="flex items-center bg-white flex-col justify-center w-[400px] h-[400px] rounded shadow-2xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-2">Login to threads</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between items-center">
            <div className="flex items-center justify-between gap-6 flex-col w-full">
              <Input
                type="text"
                crossOrigin="true"
                label="Email"
                size="lg"
                className="border w-[350px] text-sm rounded font-normal "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                crossOrigin="true"
                type="password"
                label="Password"
                size="lg"
                className="border w-[350px] text-sm rounded font-normal"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="w-[350px] bg-black text-white p-3 rounded">
                Login
              </button>
              <small>
                Don't have an account {}
                <NavLink className="font-bold" to={"/signup"}>
                  Signup
                </NavLink>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
