import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../store/postSlice";
import { loginUser } from "../utils/api";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please provide both email and password.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please provide a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }
    loginUser(email, password).then(() => {
      dispatch(postAction.setIsLogin(true));
      navigate("/");
      alert(`Login Sucessfully`);
    });
  };
  return (
    <div className="flex items-center justify-center h-[96.5vh] mx-auto image">
      <div className="flex items-center bg-white flex-col justify-center w-[400px] h-[400px] rounded shadow-2xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-2 dark:text-black">
            Login to threads
          </h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between items-center">
            <div className="flex items-center justify-between gap-6 flex-col w-full">
              <CustomInput
                type="text"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <CustomInput
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <CustomButton label="Login" className="w-[350px] p-3" />
              <small className=" dark:text-black">
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
