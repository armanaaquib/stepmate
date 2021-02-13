CREATE TYPE task_status AS ENUM ('todo', 'in progress', 'done');

CREATE TABLE task
(
    task_id     BIGSERIAL PRIMARY KEY,
    text        text      NOT NULL,
    status      task_status,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()::TIMESTAMP,
    modified_at TIMESTAMP NOT NULL DEFAULT NOW()::TIMESTAMP,
    todo_id     BIGSERIAL NOT NULL REFERENCES todo
)