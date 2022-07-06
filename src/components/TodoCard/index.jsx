import React from "react";
import styles from "../../assets/styles/components/TodoCard/index.module.scss"
const TodoCard = ({todo, deleteTodo, index}) => {
    const deleteItem = () => {
        deleteTodo(index)
    }
    return (
        // eslint-disable-next-line no-undef
        <div className={styles.card}>
            {/* eslint-disable-next-line no-undef */}
            <div>
                <h1 className={styles.header}>
                    To-Do
                </h1>
            </div>
            {/* eslint-disable-next-line no-undef */}
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