package com.stepmate.todo.repository

import com.stepmate.todo.model.Todo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TodoRepository : JpaRepository<Todo, Long> {
    fun findByUserIdOrderByCreatedAtDesc(userId: Long): List<Todo>
}
