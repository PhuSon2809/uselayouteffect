import React, { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "../action/action";
import logger from "../log/logger";
import reducer, { initState } from "../redux/reducer";

function TodoAppWithUseReducer() {
  //4. Dispatch
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div>
      <h1>TodoAppWithUseReducer</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAppWithUseReducer;
