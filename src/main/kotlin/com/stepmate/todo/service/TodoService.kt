package com.stepmate.todo.service

import com.stepmate.todo.model.Todo
import com.stepmate.todo.repository.TodoRepository
import org.springframework.stereotype.Service

@Service
class TodoService(val todoRepository: TodoRepository) {

    fun getTodoList(userId: Long): List<Todo> {
        return todoRepository.findByUserIdOrderByCreatedAtDesc(userId)
    }

}
