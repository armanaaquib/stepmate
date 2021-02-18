package com.stepmate.todo.controller

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment
import org.springframework.test.context.jdbc.Sql
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Sql("/db_scripts/insert_todo_list.sql")
internal class TodoControllerTest {

    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun `should give todo list`() {
        mockMvc.perform(get("/api/todo/"))
            .andExpect(status().isOk)
            .andExpect(content().json(ExpectedResponse.GET_TODO_LIST))
    }

}
