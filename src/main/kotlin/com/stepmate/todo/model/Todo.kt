package com.stepmate.todo.model

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.io.Serializable
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@EntityListeners(AuditingEntityListener::class)
data class Todo(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    var title: String,

    @Column(name = "user_id")
    val userId: Long,

    @OneToMany(mappedBy = "todo", fetch = FetchType.EAGER, cascade = [CascadeType.ALL])
    @OrderBy("created_at ASC")
    var tasks: List<Task> = emptyList()

) : Serializable {

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    lateinit var createdAt: LocalDateTime

    @LastModifiedDate
    @Column(name = "modified_at")
    lateinit var modifiedAt: LocalDateTime

}
