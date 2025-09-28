```text
TodoApp
│
└── div
    ├── h1
    └── TodoList
        state:
          - todos (масив об’єктів {id, text})
        functions:
          - addTodo(text) (додає нове завдання)
          - deleteTodo(id) (видаляє завдання по id)
        │
        └── div
            ├── AddTodoForm
            │   props:
            │     - ↑ onAddTodo(text) (child → parent: функція для передачі нового завдання у TodoList; функція передається з TodoList)
            │   state:
            │     - text (рядок, значення інпута)
            │   │
            │   └── form
            │       ├── input
            │       └── button
            │
            └── ul
                └── TodoItem (рендериться для кожного елемента todos)
                    props:
                      - task (об’єкт {id, text}, дані одного завдання)
                      - ↑ onDelete(id) (child → parent: функція для видалення завдання; функція передається з TodoList)
                    state:
                      - isCompleted (boolean, чи виконане завдання)
                    │
                    └── div
                        └── li
                            ├── input
                            ├── span
                            └── button
```
