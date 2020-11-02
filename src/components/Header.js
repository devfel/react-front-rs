import React from "react";

export default function Header({ title }) {
  //argument props destructuring
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
