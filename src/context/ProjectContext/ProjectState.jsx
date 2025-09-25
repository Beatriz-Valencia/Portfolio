import React, { createContext, useReducer } from 'react';
import axios from "axios";
import ProjectReducer from "./ProjectReducer";

const initialState = {
    projects: []
}