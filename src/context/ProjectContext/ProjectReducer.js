const ProjectReducer = (state, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return {
                ...state, 
                projects:action.payload,
            };
            default:
                return state;
    }
};

export default ProjectReducer;