package com.stepmate.todo.controller

import com.stepmate.shared.StepmateResponse
import com.stepmate.todo.dto.TodoRequest
import com.stepmate.todo.model.Todo
import com.stepmate.todo.service.TodoService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/todo")
class TodoController(private val todoService: TodoService) {

    //TODO Use fix userId 1 till we decide how are we going to get it
    private val userId = 1L

    @GetMapping("/")
    fun getTodoList(): ResponseEntity<StepmateResponse<List<Todo>>> {
        val todoList = todoService.getTodoList(userId)
        return ResponseEntity.status(HttpStatus.OK).body(StepmateResponse(todoList))
    }

    @PostMapping("/")
    fun addTodo(@RequestBody todoRequest: TodoRequest): ResponseEntity<StepmateResponse<Todo>> {
        val todo = todoService.addTodo(userId, todoRequest)
        return ResponseEntity.status(HttpStatus.CREATED).body(StepmateResponse(todo))
    }

}
