import React, { memo } from "react";

function Content({ onIncreas }) {
  console.log("re-render");
  return (
    <>
      <h2>Content: HELLO ANH EM</h2>
      <button onClick={onIncreas}>Increase</button>
    </>
  );
}

export default memo(Content);
