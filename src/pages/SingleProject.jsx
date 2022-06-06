import { useState, useEffect } from "react";
import { useGetProject, useUpdateProject } from "../hooks/useProjects";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft, AiFillEdit } from "react-icons/ai";

const SingleProject = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetProject(id);
  const { mutate } = useUpdateProject(id);
  const [isEditing, setIsEditing] = useState(false);
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
    setIsEditing(!isEditing);
  };

  let content;

  if (isLoading) {
    content = <h2>Loading ...</h2>;
  } else if (isError) {
    content = <h2>{error.message}</h2>;
  } else {
    content = (
      <div className="project">
        <img src={data?.picture_url} alt="" />
        <div className="info">
          <h3>{data?.title}</h3>
          <div onClick={() => setIsEditing(!isEditing)}>
            <AiFillEdit />
          </div>
        </div>
        <p>{data?.description}</p>
      </div>
    );
  }

  useEffect(() => {
    if (data) {
      setProject(data);
    }
    // eslint-disable-next-line
  }, [isEditing]);

  return (
    <div>
      <div className="head">
        <Link to="/">
          <AiOutlineArrowLeft /> Go Back
        </Link>
      </div>
      <div className="content">
        {!isEditing && <div>{content}</div>}
        <div className={isEditing ? "edit" : "edit-form"}>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="text"
                placeholder="Title"
                id="title"
                value={project.title}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Technos"
                id="technos"
                value={project.technos}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Description"
                id="description"
                value={project.description}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="GitHub Link"
                id="github"
                value={project.github}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Thumbnail"
                id="picture_url"
                value={project.picture_url}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <button type="submit">Save</button>
            <button
              onClick={(e) => {
                e.preventDefault(e);
                setIsEditing(!isEditing);
              }}
              className="btn"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
