import React from "react";
import { Spinner } from "@material-tailwind/react";
export default function Loading() {
  return (
    <h1 className="flex items-center justify-center mx-auto h-screen dark:text-white dark:bg-black">
      <Spinner />
    </h1>
  );
}
