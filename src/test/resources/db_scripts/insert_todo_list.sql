INSERT INTO todo (id, title, created_at, modified_at, user_id)
VALUES (1, 'todo1', '2021-02-15', '2021-02-16', 1),
       (2, 'todo2', '2021-02-14', '2021-02-16', 1);

INSERT INTO task(id, text, status, created_at, modified_at, todo_id)
VALUES (1, 'todo1 task1', 'TODO', '2021-02-15', '2021-02-16', 1),
       (2, 'todo1 task2', 'DONE', '2021-02-16', '2021-02-17', 1);
