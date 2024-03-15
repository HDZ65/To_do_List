import { useState } from 'react'
import { nanoid } from "nanoid"
import ListItem from './components/ListItem';

function App() {

  const [todoList, setTodoList] = useState([])

  const [todo, setTodo] = useState("")

  function deleteTodo(id) {
    setTodoList(prevList => prevList.filter(prevItem => prevItem.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()

    setTodoList([...todoList, {id: nanoid(), content: todo}])
    setTodo("")
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-list" className="text-slate-50">Ajouter une chose à faire
          </label>
          <input value={todo} onChange={e => setTodo(e.target.value)} type="text" className=" my-1 block w-full rounded" />
          <button className="mt4 p-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">Aucune liste à afficher.</li>
          )}
          {todoList.length > 0 &&
            todoList.map(item => (
              <ListItem key={item.id} id={item.id} text={item.content} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </div>
  )
}
export default App