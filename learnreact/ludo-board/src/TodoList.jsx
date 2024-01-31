import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "code", id: uuidv4(), isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone:false }]);
        setNewTodo("");
    }
    let updateTodoValue = () => {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }
    let upperCaseAll= ()=>{
        setTodos((prevTodo)=> 
        prevTodo.map((todo)=>{
            return {
                ...todo, task:todo.task.toUpperCase(),
            }
        })
        )
    }
    let upperCaseOne= (id)=>{
        setTodos((prevTodo)=> 
        prevTodo.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo, task:todo.task.toUpperCase(),
                }
            }
            else{
                return todo
            }
        })
        )
    }
    let markAsDoneAll= ()=>{
        setTodos((prevTodo)=> 
        prevTodo.map((todo)=>{
            return {
                ...todo, isDone:true,
            }
        })
        )
    }
    let markAsDoneOne= (id)=>{
        setTodos((prevTodo)=> 
        prevTodo.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo, isDone:true,
                }
            }
            else{
                return todo
            }
        })
        )
    }
    let sty ={textDecorationLine:"line-through"}
    return (
        <>
            <input type="text" placeholder="Add Tasks" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask}>Add Tasks</button>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h3>Todo List</h3>
            <ul>
                {
                    todos.map((todo) => <li key={todo.id} style={todo.isDone?{ textDecoration: 'line-through' } : {}}>
                        <span>{todo.task} </span> 
                        <button onClick={() => deleteTodo(todo.id)}> Delete </button> &nbsp;
                        <button onClick={() => upperCaseOne(todo.id)}> UpperCaseOne</button> &nbsp;
                        <button onClick={() => markAsDoneOne(todo.id)}> MarkAsDone</button>
                    </li>)
                }
            </ul>
            <button onClick={upperCaseAll}>UpperCaseAll</button>
            <button onClick={markAsDoneAll}>MarkAsDoneAll</button>
        </>
    )
}