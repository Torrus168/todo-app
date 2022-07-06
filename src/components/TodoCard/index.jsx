import React from "react";
import styles from "../../assets/styles/components/TodoCard/index.module.scss"
const TodoCard = ({todo, deleteTodo, index}) => {
    const deleteItem = () => {
        deleteTodo(index)
    }
    return (
        <div className={styles.card}>
            <div>
                <h1 className={styles.header}>
                    To-Do
                </h1>
            </div>
            <div className={styles.text}>
                <p>{ todo }</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={deleteItem} className={styles.delete}>Delete</button>
                <button onClick={deleteItem} className={styles.complete}>Complete</button>
            </div>
        </div>
    )
}
export default TodoCard