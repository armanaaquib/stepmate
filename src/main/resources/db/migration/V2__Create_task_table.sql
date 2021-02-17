CREATE TABLE task
(
    id          BIGSERIAL PRIMARY KEY,
    text        TEXT      NOT NULL,
    status      varchar(12),
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()::TIMESTAMP,
    modified_at TIMESTAMP NOT NULL DEFAULT NOW()::TIMESTAMP,
    todo_id     BIGINT    NOT NULL REFERENCES todo
)
