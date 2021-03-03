package com.stepmate.todo.util

import com.stepmate.todo.model.Task
import com.stepmate.todo.model.TaskStatus
import com.stepmate.todo.model.Todo
import java.time.LocalDateTime

fun getTodoList(): List<Todo> {
    val todo1 = Todo(1, "todo1", 1, mutableListOf())
    todo1.createdAt = LocalDateTime.of(2021, 2, 15, 0, 0)
    todo1.modifiedAt = LocalDateTime.of(2021, 2, 16, 0, 0)

    val todo1Task1 = Task(1, "todo1 task1", TaskStatus.TODO, todo1)
    todo1Task1.createdAt = LocalDateTime.of(2021, 2, 15, 0, 0)
    todo1Task1.modifiedAt = LocalDateTime.of(2021, 2, 16, 0, 0)
    todo1.tasks.add(todo1Task1)

    val todo1Task2 = Task(2, "todo1 task2", TaskStatus.DONE, todo1)
    todo1Task2.createdAt = LocalDateTime.of(2021, 2, 16, 0, 0)
    todo1Task2.modifiedAt = LocalDateTime.of(2021, 2, 17, 0, 0)
    todo1.tasks.add(todo1Task2)

    val todo2 = Todo(2, "todo2", 1, mutableListOf())
    todo2.createdAt = LocalDateTime.of(2021, 2, 14, 0, 0)
    todo2.modifiedAt = LocalDateTime.of(2021, 2, 16, 0, 0)

    return listOf(todo1, todo2)
}
