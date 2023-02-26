// import logo from './logo.svg';
// import './App.css';

//CSSが読み込まれている

import { useState , useRef } from "react";
import  Todolist  from "./Todolist";
import  {  v4  as  uuidv4  }  from  'uuid' ; 

//Appコンポーネント
function App() {
  //setTodos は、todosの中身を更新したり追加したりする
  const [todos,setTodos] = useState([
    { id:1 , name:"Todo1" , completed:false },
  ]);

  const todoNameRef = useRef();
  //要素とかを取得できるのが、useRef

  const handleAddTodo = ()=>{
    //タスクを追加する
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos((prevTodos)=>{
      return[...prevTodos , {id: uuidv4() , name: name , completed: false}];
    })
    todoNameRef.current.value = null;
  }

  //toggleを入れ替える関数
  const toggleTodo = (id) => {
    const newTodos = [...todos];  //todosという状態変数をそのまま使いたくない、一旦変数にする
    const todo = newTodos.find((todo) => todo.id === id);
    //引数に合致するidのtodoだけをnewTodosから見つけて、todoに代入する
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  //
  const handleClear = (id) => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos); 
  };

  return (
    <div className="App">
      <Todolist todos = {todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;


//onClickをトリガーとして用意しておく
//...はスプレッド構文、モダンなjsの描き方


//headerロゴのコード（多分もう要らない）
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
