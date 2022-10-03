import "./App.css";
import Memo from "./components/Memo";
import TodoAppWithUseReducer from "./components/TodoAppWithUseReducer";
import UseContext from "./components/UseContext";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div className="App">
      <UseLayoutEffect />
      <UseRef />
      <Memo />
      <UseMemo />
      <UseReducer />
      <TodoAppWithUseReducer />
      <UseContext />
    </div>
  );
}

export default App;
