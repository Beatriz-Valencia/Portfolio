import React, { createContext, useReducer } from "react";
import projects from "../data/projects.js";
import ProjectReducer from "./ProjectReducer";


const initialState = {
  projects: [],
  project: {},
};

export const ProductContext = createContext(initialState);

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_PROJECTS", payload: projects });
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        getProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
