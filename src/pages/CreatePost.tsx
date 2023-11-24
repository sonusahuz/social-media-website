import React, { useState } from "react";
import Modal from "../components/layouts/Modal";
import { X } from "lucide-react";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { storage } from "../auth/firebase";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [blogImage, setBlogImage] = useState<any>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (blogImage === null) return;
    const img = ref(storage, `img/${blogImage.name}`);
    uploadBytes(img, blogImage).then((res) => {
      navigate("/profile");
      alert("Post Successfully uploaded");
    });
  };

  return (
    <Modal>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex items-start justify-between flex-col gap-4 bg-white w-[500px] h-auto rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Create Your Post</h1>
            <X
              className="ml-[260px] cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
          <div>
            <textarea
              className="border w-[450px] h-[200px] p-4 text-black text-sm rounded-lg"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="start a thread"
              value={title}
            />
          </div>
          <div className="flex items-center justify-between mx-auto gap-16">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setBlogImage(e.target.files?.[0]);
              }}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
            <button className="px-6 py-2 text-sm  bg-black text-white rounded-full">
              Post
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
