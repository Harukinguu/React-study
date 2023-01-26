// import logo from './logo.svg';
// import './App.css';

//CSSが読み込まれている

import { useState } from "react";
import  Todolist  from "./Todolist";

function App() {
  const [todos,setTodos] = useState(["Todo1","Todo2"]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello</p>
      </header> */}

      <Todolist todos = {todos}/>
      <input type="text"/>
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク：０</div>
    </div>
  );
}

export default App;
