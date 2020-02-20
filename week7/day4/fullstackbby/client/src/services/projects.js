import axios from "axios";

const baseURL = "http://localhost:3000/api/projects";

const projectsService = axios.create({
  baseURL
});

export const getAllProjects = async () => {
  const { data } = await projectsService.get();
  return data;
};
export const getProject = async projectId => {
  const { data } = await projectsService.get(`/${projectId}`);
  return data;
};

export const createProject = async (title, description) => {
  const { data } = await projectsService.post("/", { title, description });
  return data;
};

export const updateProject = async (id, title, description) => {
  const { data } = await projectsService.put(`/${id}`, { title, description });
  return data;
};

export const deleteProject = async id => {
  const { data } = await projectsService.delete(`/${id}`);
  return data;
};
