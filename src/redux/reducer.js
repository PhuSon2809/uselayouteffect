import { ADD_JOB, DELETE_JOB, SET_JOB } from "../constants/constants";

//1. Init state:
export const initState = {
  job: "",
  jobs: [],
};

//3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
      //Khi ko dùng return của case thì phải có break
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;
