import React, { useState } from "react";
import Modal from "../modal/Modal";
import { X } from "lucide-react";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { storage } from "../../auth/firebase/firebase";
export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [blogImage, setBlogImage] = useState<any>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (blogImage === null) return;
    const img = ref(storage, `img/${blogImage.name}`);
    uploadBytes(img, blogImage).then((res) => {
      console.log(res);
      navigate("/profile");
      alert("Post Successfully uploaded");
    });
  };

  return (
    <Modal>
      <div className="flex items-center justify-between absolute">
        <h1 className=" ml-4 text-xl font-bold">Create Your Post</h1>
        <X
          className=" ml-[370px] mt-3 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center bg-white w-[600px] h-auto rounded-lg">
          <div>
            <textarea
              className="border-none w-[600px] mt-5 h-[100px] text-black text-sm p-4 focus:border-none focus:outline-none rounded-lg"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="start a thread"
              value={title}
            />
            <div className="flex items-center justify-between my-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setBlogImage(e.target.files?.[0]);
                }}
                className="block w-full mx-4 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
              <button className="px-6 py-2 text-sm mx-4 bg-black text-white rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
