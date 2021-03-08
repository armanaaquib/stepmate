package com.stepmate.todo.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.stepmate.shared.StepmateResponse
import com.stepmate.todo.dto.TaskRequest
import com.stepmate.todo.dto.TodoRequest
import com.stepmate.todo.model.Task
import com.stepmate.todo.model.TaskStatus
import com.stepmate.todo.model.Todo
import com.stepmate.todo.service.TodoService
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.BDDMockito.given
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import java.time.LocalDateTime


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
internal class TodoControllerTest {

    @MockBean
    lateinit var todoService: TodoService

    @Autowired
    lateinit var mockMvc: MockMvc

    @Autowired
    lateinit var jacksonBuilder: Jackson2ObjectMapperBuilder

    lateinit var objectMapper: ObjectMapper

    @BeforeEach
    internal fun setUp() {
        objectMapper = jacksonBuilder.build()
    }

    @Test
    fun `should give todo list`() {
        val todo1 = Todo(1, "todo1", 1)
        todo1.createdAt = LocalDateTime.of(2021, 2, 15, 0, 0)
        todo1.modifiedAt = LocalDateTime.of(2021, 2, 16, 0, 0)
        val todo1Task1 = Task(1, "todo1 task1", TaskStatus.TODO, todo1)
        todo1Task1.createdAt = LocalDateTime.of(2021, 2, 15, 0, 0)
        todo1Task1.modifiedAt = LocalDateTime.of(2021, 2, 16, 0, 0)
        val todo1Task2 = Task(2, "todo1 task2", TaskStatus.DONE, todo1)
        todo1Task2.createdAt = LocalDateTime.of(2021, 2, 16, 0, 0)
        todo1Task2.modifiedAt = LocalDateTime.of(2021, 2, 17, 0, 0)
        todo1.tasks = listOf(todo1Task1, todo1Task2)
        val todo2 = Todo(2, "todo2", 1, listOf())
        todo2.createdAt = LocalDateTime.of(2021, 2, 14, 0, 0)
        todo2.modifiedAt = LocalDateTime.of(2021, 2, 16, 0, 0)
        val responseTodolist = listOf(todo1, todo2)
        given(todoService.getTodoList(1)).willReturn(responseTodolist)

        val response = objectMapper.writeValueAsString(
            StepmateResponse(responseTodolist)
        )
        mockMvc.perform(get("/api/todo/"))
            .andExpect(status().isOk).andExpect(content().json(response))
    }

    @Test
    fun `should add todo list`() {
        val todoRequest = TodoRequest(null, "new todo", listOf(TaskRequest(null, "task1", null)))
        val task = Task(1, todoRequest.tasks[0].text, todo = null)
        task.createdAt = LocalDateTime.now()
        task.modifiedAt = LocalDateTime.now()
        val todo = Todo(1, todoRequest.title, 1, listOf(task))
        todo.createdAt = LocalDateTime.now()
        todo.modifiedAt = LocalDateTime.now()
        given(todoService.addTodo(1, todoRequest)).willReturn(todo)

        val response = objectMapper.writeValueAsString(StepmateResponse(todo))
        mockMvc.perform(
            post("/api/todo/")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""{"title":"new todo","tasks":[{"text":"task1"}]}""")
        ).andExpect(status().isCreated).andExpect(content().json(response))
    }

}
