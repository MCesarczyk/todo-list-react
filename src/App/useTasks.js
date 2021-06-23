import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")
        ) ||
        [
            { id: 1, content: "task1", done: false },
            { id: 2, content: "task2", done: true },
        ]
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }))
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ])
    };

    return {
        tasks,
        toggleTaskDone,
        removeTask,
        setAllDone,
        addNewTask,
    };
}