import React, { useContext } from "react";
import { ThemeContext } from "../useContext/ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <p className={context.theme}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eveniet
        quaerat tempora eligendi laborum. Illum optio officia sunt. Tempore
        dolorem distinctio quam, ut adipisci vel voluptates iure molestias vero
        nobis?
      </p>
    </div>
  );
}

export default Paragraph;
