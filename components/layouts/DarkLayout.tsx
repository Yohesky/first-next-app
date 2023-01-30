import React from "react";

export const DarkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "10px",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <h3>Dark layout</h3>
      <div>{children}</div>
    </div>
  );
};
