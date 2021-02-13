CREATE TABLE todo
(
    todo_id          BIGSERIAL PRIMARY KEY,
    title       VARCHAR(40) NOT NULL,
    created_at  TIMESTAMP   NOT NULL DEFAULT NOW()::TIMESTAMP,
    modified_at TIMESTAMP   NOT NULL DEFAULT NOW()::TIMESTAMP,
    user_id     BIGSERIAL   NOT NULL
)