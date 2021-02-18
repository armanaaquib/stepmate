package com.stepmate.todo.controller

class ExpectedResponse {

    companion object {
        const val GET_TODO_LIST =
            """{ "data": 
                    [
                        { "id": 2, "title": "todo2", "createdAt": "2021-02-14T00:00:00", "modifiedAt": "2021-02-16T00:00:00", "userId": 1, "tasks": [] },
                        { "id": 1,"title": "todo1", "createdAt": "2021-02-15T00:00:00", "modifiedAt": "2021-02-16T00:00:00", "userId": 1,"tasks": 
                            [
                                { "id": 1, "text": "todo1 task1", "status": "TODO", "createdAt": "2021-02-15T00:00:00", "modifiedAt": "2021-02-16T00:00:00" },
                                { "id": 2, "text": "todo1 task2", "status": "DONE", "createdAt": "2021-02-16T00:00:00", "modifiedAt": "2021-02-17T00:00:00" }
                            ]
                        }
                    ]
            }"""
    }

}
