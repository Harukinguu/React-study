import React from 'react'

//Todoコンポーネント
const Todo = ({ todo , toggleTodo }) => {
  const handleTodoClick = () =>{
    toggleTodo(todo.id);  //クリックしたやつのidをtoggleTodoしてあげる
  };
  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          readOnly 
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  )
}

export default Todo;

//propsのバケツリレー、あまり好ましい記述方法ではない