import axios from "axios";

const projectApi = axios.create({
  baseURL: " http://localhost:4000/projects",
});

export const getProjects = async () => {
  const response = await projectApi.get("/");
  return response.data;
};

export const getProject = async (id) => {
  const response = await projectApi.get(`/${id}`);
  return response.data;
};

export const addProject = async (project) => {
  return await projectApi.post("/", project);
};

export const updateProject = async (project) => {
  return await projectApi.patch(`/${project.id}`, project);
};

export const deleteProject = async (id) => {
  return await projectApi.delete(`/${id}`);
};

export default projectApi;
