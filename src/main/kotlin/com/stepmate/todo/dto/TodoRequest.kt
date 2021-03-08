package com.stepmate.todo.dto

data class TodoRequest(
    val id: Long?,
    val title: String,
    val tasks: List<TaskRequest> = emptyList()
)
