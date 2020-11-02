import React from "react";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = React.useState(["Projeto 1", "Projeto 2"]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Contacts" />
      <ul>
        {projects.map((elem) => (
          <li key={elem}>{elem}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
}

export default App;
