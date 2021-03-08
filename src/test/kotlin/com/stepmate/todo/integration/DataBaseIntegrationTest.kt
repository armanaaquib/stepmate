package com.stepmate.todo.integration

import com.stepmate.todo.repository.TodoRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.boot.test.mock.mockito.SpyBean
import org.springframework.data.auditing.AuditingHandler
import org.springframework.data.auditing.DateTimeProvider

@SpringBootTest
@AutoConfigureTestDatabase
internal class DataBaseIntegrationTest {

    @MockBean
    lateinit var dateTimeProvider: DateTimeProvider

    @SpyBean
    lateinit var handler: AuditingHandler

    @Autowired
    lateinit var todoRepository: TodoRepository

    @BeforeEach
    internal fun setUp() {
        handler.setDateTimeProvider(dateTimeProvider)
    }

    @Test
    fun `should get empty todo list`() {
        assertThat(todoRepository.findByUserIdOrderByCreatedAtDesc(1)).isEmpty()
    }
}
