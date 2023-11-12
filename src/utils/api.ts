import axios from "axios";
import { auth, storage } from "../auth/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const GET_POST_URL =
  "https://652b4cd74791d884f1fdb370.mockapi.io/todo/posts";

export const USER_PROFILE_API =
  "https://652b4cd74791d884f1fdb370.mockapi.io/todo/profile";

export const getUserPosts = async () => {
  try {
    const response = await fetch(GET_POST_URL);
    const data = await response.json();
    return data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};

export const getSingleUserPosts = async (id: string) => {
  try {
    const response = await fetch(`${GET_POST_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};

// login user
export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login Successfully");
  } catch (error) {
    console.error("something went wrong", error);
  }
};

// sign up user
export const signupUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Login Successfully");
  } catch (error) {
    console.error("something went wrong", error);
  }
};

//logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Login Successfully");
  } catch (error) {
    console.error("something went wrong", error);
  }
};

// get user details

export const getUserProfile = async () => {
  try {
    const response = await axios.get(USER_PROFILE_API);
    return response.data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};

// single user details

export const getSingleProfile = async (id: string) => {
  try {
    const response = await axios.get(`${USER_PROFILE_API}/${id}`);
    return response.data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};

// edit user profile

export const editUserProfile = async (
  id: string,
  username: string,
  fullName: string
) => {
  try {
    const response = await axios.put(`${USER_PROFILE_API}/${id}`, {
      username,
      fullName,
    });
    return response.data;
  } catch (error: any) {
    alert(
      `Something went wrong Please Check your Network connection ${error.message}`
    );
  }
};
