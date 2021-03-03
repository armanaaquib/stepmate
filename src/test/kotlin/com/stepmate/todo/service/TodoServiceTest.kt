package com.stepmate.todo.service

import com.stepmate.todo.model.Task
import com.stepmate.todo.model.TaskStatus
import com.stepmate.todo.model.Todo
import com.stepmate.todo.repository.TodoRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.mockito.BDDMockito.given
import org.mockito.BDDMockito.then
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
        val todo1 = Todo(1, "title1", 1, mutableListOf())
        val todo2 = Todo(2, "title2", 1, mutableListOf())
        todo2.tasks.add(Task(1, "text", TaskStatus.TODO, todo2))
        val expectedTodoList = listOf(todo1, todo2)
        given(todoRepository.findByUserIdOrderByCreatedAtDesc(1)).willReturn(expectedTodoList)

        val actualTodoList = todoService.getTodoList(1)

        then(todoRepository).should().findByUserIdOrderByCreatedAtDesc(1)
        assertThat(actualTodoList).isEqualTo(expectedTodoList)
    }

    @Test
    fun `should give empty todo list`() {
        val expectedTodoList = listOf<Todo>()
        given(todoRepository.findByUserIdOrderByCreatedAtDesc(1)).willReturn(expectedTodoList)

        val actualTodoList = todoService.getTodoList(1)

        then(todoRepository).should().findByUserIdOrderByCreatedAtDesc(1)
        assertThat(actualTodoList).isEqualTo(expectedTodoList)
    }

}
