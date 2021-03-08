package com.stepmate.todo.service

import com.stepmate.todo.dto.TaskRequest
import com.stepmate.todo.dto.TodoRequest
import com.stepmate.todo.model.Task
import com.stepmate.todo.model.TaskStatus
import com.stepmate.todo.model.Todo
import com.stepmate.todo.repository.TodoRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.mockito.BDDMockito.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import java.time.LocalDateTime

@SpringBootTest
internal class TodoServiceTest {

    @MockBean
    lateinit var todoRepository: TodoRepository

    @Autowired
    lateinit var todoService: TodoService

    @AfterEach
    internal fun tearDown() {
        then(todoRepository).shouldHaveNoMoreInteractions()
    }

    @Test
    fun `should give all todo list`() {
        val todo1 = Todo(1, "title1", 1)
        val todo2 = Todo(2, "title2", 1)
        val todo2Task1 = Task(1, "text", TaskStatus.TODO, todo2)
        todo2.tasks = listOf(todo2Task1)
        val expectedTodoList = listOf(todo1, todo2)
        given(todoRepository.findByUserIdOrderByCreatedAtDesc(1)).willReturn(expectedTodoList)

        val actualTodoList = todoService.getTodoList(1)

        then(todoRepository).should().findByUserIdOrderByCreatedAtDesc(1)
        assertThat(actualTodoList).isEqualTo(expectedTodoList)
    }

    @Test
    fun `should give empty todo list`() {
        val expectedTodoList = emptyList<Todo>()
        given(todoRepository.findByUserIdOrderByCreatedAtDesc(1)).willReturn(expectedTodoList)

        val actualTodoList = todoService.getTodoList(1)

        then(todoRepository).should().findByUserIdOrderByCreatedAtDesc(1)
        assertThat(actualTodoList).isEqualTo(expectedTodoList)
    }

    @Test
    fun `should add todo`() {
        val todoRequest = TodoRequest(
            null, "title", listOf(TaskRequest(null, "task1", null), TaskRequest(null, "task2", null))
        )

        val expectedTodo = Todo(1, todoRequest.title, 1)
        expectedTodo.createdAt = LocalDateTime.now()
        expectedTodo.modifiedAt = LocalDateTime.now()
        val expectedTask1 = Task(1, todoRequest.tasks[0].text, todo = expectedTodo)
        expectedTask1.createdAt = LocalDateTime.now()
        expectedTask1.modifiedAt = LocalDateTime.now()
        val expectedTask2 = Task(2, todoRequest.tasks[1].text, todo = expectedTodo)
        expectedTask2.createdAt = LocalDateTime.now()
        expectedTask2.modifiedAt = LocalDateTime.now()
        expectedTodo.tasks = listOf(expectedTask1, expectedTask2)

        given(todoRepository.save(argThat {
            it.title == "title" && it.userId == 1L && it.tasks.size == 2 && it.tasks[0].text == "task1" && it.tasks[1].text == "task2"
        })).willReturn(expectedTodo)

        val addedTodo = todoService.addTodo(1, todoRequest)

        then(todoRepository).should().save(any(Todo::class.java))
        assertThat(addedTodo).isEqualTo(expectedTodo)
    }
}
