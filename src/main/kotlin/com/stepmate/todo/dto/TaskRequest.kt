package com.stepmate.todo.dto

import com.stepmate.todo.model.TaskStatus

data class TaskRequest(
    val id: Long?,
    val text: String,
    val status: TaskStatus?
)
