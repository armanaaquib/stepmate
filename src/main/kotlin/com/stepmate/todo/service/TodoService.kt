package com.stepmate.todo.service

import com.stepmate.todo.dto.TodoRequest
import com.stepmate.todo.model.Task
import com.stepmate.todo.model.Todo
import com.stepmate.todo.repository.TodoRepository
import org.springframework.stereotype.Service

@Service
class TodoService(private val todoRepository: TodoRepository) {

    fun getTodoList(userId: Long): List<Todo> {
        return todoRepository.findByUserIdOrderByCreatedAtDesc(userId)
    }

    fun addTodo(userId: Long, todoRequest: TodoRequest): Todo {
        val todo = Todo(title = todoRequest.title, userId = userId)
        todo.tasks = todoRequest.tasks.map { Task(text = it.text, todo = todo) }
        return todoRepository.save(todo)
    }

}
