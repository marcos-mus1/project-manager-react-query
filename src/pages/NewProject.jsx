import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAddProject } from "../hooks/useProjects";

const NewProject = () => {
  const { mutate } = useAddProject();
  const [project, setProject] = useState({
    title: "",
    technos: "",
    description: "",
    github: "",
    picture_url: "",
  });

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setProject({ ...project, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(project);
  };
  return (
    <div>
      <div className="head">
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          {" "}
          <Link to="/">
            <AiOutlineArrowLeft /> Go Back
          </Link>
          <h2> Add Project</h2>
        </div>
      </div>{" "}
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Title"
            id="title"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Technos"
            id="technos"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            id="description"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="GitHub Link"
            id="github"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Thumbnail"
            id="picture_url"
            onChange={handleInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProject;
