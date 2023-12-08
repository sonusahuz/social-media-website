import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}
