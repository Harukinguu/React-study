import React from 'react'

const Todolist = ({todos}) => {
  return todos.map((todo)=><Todo/>)
}

export default Todolist

//3～7行目で、コンポーネントを生成して、exportでどのファイルでも使えるようにする
//波括弧の中には、変数関数を入れられる。javascriptとして認識される
//map関数：配列の中身を一つ一つ取り出す
//取り出した中身を、todoとおいて、Todoコンポーネントに渡してあげる

