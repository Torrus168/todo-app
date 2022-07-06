import React, {useState} from "react";
import TodoCard from "../../components/TodoCard";
import styles from "../../assets/styles/wrappers/TodoWrapper/index.module.scss"

const TodoWrapper = () => {
    const [todoText, setTodo] = useState('')
    const [todoList, updateTodoList] = useState([])
    const addTodo = () => {
        try {
            if(todoText === '') throw "Cannot create empty event"
            if(todoText.length > 30) throw "Message too long"
        }
        catch (error) {
           return alert(error)
        }
        const newTodo = {"text": todoText}
        updateTodoList([...todoList, newTodo])
    }
    const deleteTodo = (index) => {
        const updatedTodo = [...todoList]
        updatedTodo.splice(index, 1)
        updateTodoList(updatedTodo)
    }
    return (
    <div className={styles.wrapper}>
        <div className={styles.creation}>
            <h1>
                Create New Task
            </h1>
            <input
                className={styles.input}
                onChange={event => setTodo(event.target.value)}
                placeholder={'enter your task'}
            />
            <button onClick={addTodo} className={styles.save}>Save To-Do</button>
        </div>
        <h1>
            Your Tasks
        </h1>
        {todoList.map((todo, index) => (
            <TodoCard
                key={index}
                todo={todo.text}
                deleteTodo={deleteTodo}
                index={index}
            />
            )
        )}
    </div>
    )
}
export default TodoWrapper