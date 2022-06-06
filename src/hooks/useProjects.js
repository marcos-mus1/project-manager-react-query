import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  deleteProject,
  updateProject,
  getProject,
  getProjects,
  addProject,
} from "../api/projectApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useGetProjects = () => {
  return useQuery("projects", getProjects);
};

export const useGetProject = (id) => {
  const queryClient = useQueryClient(); //for setting initial data
  return useQuery(["project", id], () => getProject(id), {
    initialData: () => {
      const project = queryClient
        .getQueriesData("projects")
        ?.data?.find((project) => project.id === parseInt(id));
      if (project) {
        return { data: project };
      } else {
        return undefined;
      }
    },
  });
};

export const useAddProject = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(addProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
      toast.success("Project Added");
      navigate(-1);
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
      toast.success("Project Deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateProject = (id) => {
  const queryClient = useQueryClient();
  return useMutation(updateProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["project", id]);
      toast.success("Project Updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
