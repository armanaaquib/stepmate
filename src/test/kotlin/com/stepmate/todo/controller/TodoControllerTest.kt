package com.stepmate.todo.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.stepmate.shared.StepmateResponse
import com.stepmate.todo.util.getTodoList
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
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

    @Autowired
    lateinit var jacksonBuilder: Jackson2ObjectMapperBuilder

    lateinit var objectMapper: ObjectMapper

    @BeforeEach
    internal fun setUp() {
        objectMapper = jacksonBuilder.build()
    }

    @Test
    fun `should give todo list`() {
        val response = objectMapper.writeValueAsString(
            StepmateResponse(getTodoList())
        )

        mockMvc.perform(get("/api/todo/"))
            .andExpect(status().isOk)
            .andExpect(content().json(response))
    }

}
