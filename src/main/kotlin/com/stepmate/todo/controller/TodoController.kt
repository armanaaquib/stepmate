package com.stepmate.todo.controller

import com.stepmate.shared.StepmateResponse
import com.stepmate.todo.service.TodoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/todo")
class TodoController(val todoService: TodoService) {

    @GetMapping("/")
    fun getTodoList(): ResponseEntity<StepmateResponse> {
        val userId = 1L     //TODO Use fix userId 1 till we decide how are we going to get it

        val todoList = todoService.getTodoList(userId)

        return ResponseEntity.ok(StepmateResponse(todoList))
    }
}
