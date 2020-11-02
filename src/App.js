import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Home">
        <ul>
          <li>About me</li>
          <li>Product</li>
        </ul>
      </Header>
      <Header title="Contacts" />
    </>
  );
}

export default App;
