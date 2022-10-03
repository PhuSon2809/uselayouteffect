import React, { useContext } from "react";
import { ThemeContext } from "../useContext/ThemeContext";
import ContentTheme from "./ContentTheme";

//Context
//CompA => CompB => CompC
//Dùng context có thể truyền props từ component cha sang
//Comp con mà ko phải đi qua component trung gian

//1. Create context
//2. Provider
//3. Consumer

//Theme: Dark/Light

function UseContext() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <h1>UseContext</h1>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <ContentTheme />
    </div>
  );
}

export default UseContext;
