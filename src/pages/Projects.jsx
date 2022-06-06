import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { useGetProjects } from "../hooks/useProjects";

const Projects = () => {
  const { isLoading, isError, error, data } = useGetProjects();

  let content;

  if (isLoading) {
    content = <h2>Loading ...</h2>;
  } else if (isError) {
    content = <h2>{error.message}</h2>;
  } else {
    content = data?.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  }

  return (
    <div>
      <div className="head">
        <h2>All Projects</h2>
        <div>
          <Link to="new" className="link">
            New Project
          </Link>
        </div>
      </div>
      <div className="projects">{content}</div>
    </div>
  );
};

export default Projects;
