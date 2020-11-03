import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";

function App() {
  const [projects, setProjects] = React.useState(["Projeto 1", "Projeto 2"]);

  React.useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post("projects", {
      title: `projeto ${Date.now()}`,
      owner: "Luiz",
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Contacts" />
      <ul>
        {projects.map((elem) => (
          <li key={elem.id}>{elem.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
}

export default App;
