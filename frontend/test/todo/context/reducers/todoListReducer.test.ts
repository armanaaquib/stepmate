import ActionTypes from "../../../../src/todo/context/actions/actionsTypes";
import todoListReducer, {
  Todo,
} from "../../../../src/todo/context/reducers/todoListReducer";

describe("todoListReducer", () => {
  it("should start loading", () => {
    const state = { error: false, loading: false, data: [] };
    expect(
      todoListReducer(state, { type: ActionTypes.START_LOADING })
    ).toStrictEqual({ ...state, loading: true });
  });

  it("should stop loading", () => {
    const state = { error: false, loading: true, data: [] };
    expect(
      todoListReducer(state, { type: ActionTypes.STOP_LOADING })
    ).toStrictEqual({ ...state, loading: false });
  });

  it("should load todo list", () => {
    const todoList: Todo[] = [
      {
        id: 1,
        title: "todo1",
        createdAt: "2021-02-14T00:00:00",
        modifiedAt: "2021-02-14T00:00:00",
        userId: 1,
        tasks: [
          {
            id: 1,
            text: "todo1 text1",
            status: "TODO",
            createdAt: "2021-02-14T00:00:00",
            modifiedAt: "2021-02-14T00:00:00",
          },
        ],
      },
      {
        id: 2,
        title: "todo2",
        createdAt: "2021-02-14T00:00:00",
        modifiedAt: "2021-02-14T00:00:00",
        userId: 1,
        tasks: [],
      },
    ];
    expect(
      todoListReducer(
        { error: true, loading: false, data: [] },
        { type: ActionTypes.LOAD_TODO_LIST, payload: todoList }
      )
    ).toStrictEqual({ error: false, loading: false, data: todoList });
  });

  it("should update error in loading todo list", () => {
    const state = {
      error: false,
      loading: false,
      data: [
        {
          id: 2,
          title: "todo2",
          createdAt: "2021-02-14T00:00:00",
          modifiedAt: "2021-02-14T00:00:00",
          userId: 1,
          tasks: [],
        },
      ],
    };
    expect(
      todoListReducer(state, { type: ActionTypes.ERROR_IN_LOADING_TODO_LIST })
    ).toStrictEqual({ ...state, error: true, loading: false, data: [] });
  });
});
