package com.stepmate.todo.model

import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.io.Serializable
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@EntityListeners(AuditingEntityListener::class)
data class Task(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    var text: String,

    @Enumerated(EnumType.STRING)
    var status: TaskStatus = TaskStatus.TODO,

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "todo_id", referencedColumnName = "id")
    @JsonIgnore
    val todo: Todo?

) : Serializable {

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    lateinit var createdAt: LocalDateTime

    @LastModifiedDate
    @Column(name = "modified_at")
    lateinit var modifiedAt: LocalDateTime

}
