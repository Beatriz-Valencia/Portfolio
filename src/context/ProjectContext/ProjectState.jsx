import React, { createContext, useReducer, useEffect } from "react";
import projects from "../../data/data";
import ProjectReducer from "./ProjectReducer";


const initialState = {
  projects: [],
  project: {},
};

export const ProjectContext = createContext(initialState);

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const getProjects =() => {
    dispatch({type: "GET_PROJECTS", payload: projects})
  };

  useEffect(() => {
   getProjects();
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
