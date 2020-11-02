import React from "react";

export default function Header({ title, children }) {
  //argument props destructuring
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
