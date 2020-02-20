import React from "react";
import ProjectDetail from "../components/ProjectDetail";
const Project = props => {
  return (
    <>
      <h2>Project detail</h2>
      <ProjectDetail projectId={props.match.params.projectId} />
    </>
  );
};

export default Project;
