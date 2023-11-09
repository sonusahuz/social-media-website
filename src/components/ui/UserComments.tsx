import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import { postAction } from "../../store/postSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
export default function UserComments() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    dispatch(
      postAction.addComment({
        text: text,
        id: nanoid(),
      })
    );
    setText("");
  };
  return (
    <>
      <Input
        crossOrigin="true"
        label="Add a Comment..."
        size="lg"
        icon={
          <SendHorizonal
            className=" text-black cursor-pointer"
            onClick={handleSubmit}
          />
        }
        onChange={(event) => setText(event.target.value)}
      />
    </>
  );
}
