**TodoApp**
└── **TodoList**
    ├── state: todos (масив усіх завдань)
    |
    ├── **AddTodoForm**
    |   └── props: onAddTodo(text)  <-- (Надсилає текст нового завдання вгору до TodoList)
    |
    └── **TodoItem** (створюється для кожного елемента в 'todos')
        ├── state: isCompleted (boolean)  <-- (Локальний стан для відстеження завершення)
        ├── props: task                   --> (Отримує дані одного завдання вниз від TodoList)
        └── props: onDelete(id)           <-- (Надсилає id для видалення завдання вгору до TodoList)