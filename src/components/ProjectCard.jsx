import { useDeleteProject } from "../hooks/useProjects";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { mutate } = useDeleteProject();

  const deleteProject = (id) => {
    mutate(id);
  };
  return (
    <div className="card">
      <Link to={`${project.id}`}>
        <img src={project.picture_url} alt="" />
      </Link>

      <div className="info">
        <h3>{project.title}</h3>
        <div onClick={() => deleteProject(project.id)}>
          <FaTrash />
        </div>
      </div>
      <br />
    </div>
  );
};

export default ProjectCard;
