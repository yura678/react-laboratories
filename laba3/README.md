```text
TodoApp
│
└── TodoList
    │  state:
    │    - todos (масив об’єктів {id, text})
    │ 
    ├── AddTodoForm
    │   props:
    │     - ↑ onAddTodo(text) (child → parent: функція для передачі нового завдання у TodoList; функція передається з TodoList)
    │   state:
    │     - text (рядок, значення інпута)
    │ 
    └── TodoItem (рендериться для кожного елемента todos)
         props:
           - task (об’єкт {id, text}, дані одного завдання)
           - ↑ onDelete(id) (child → parent: функція для видалення завдання; функція передається з TodoList)
         state:
           - isCompleted (boolean, чи виконане завдання)
```

# Опис компонентів To-Do List

## TodoApp (App.jsx)
- **Роль**: головний (root) компонент застосунку.
- **Функція**: відповідає лише за складання всіх компонентів разом (composition).
- **State**: немає (за умовами завдання state не зберігається тут).
- **Props**: не має власних пропсів.
---

## TodoList (TodoList.jsx)
- **Роль**: управляє списком завдань.
- **State**:
    - `todos` → масив об’єктів виду `{ id, text }`.
- **Props**:
    - немає вхідних пропсів, але передає callback-и дітям:
        - `onAddTodo(text)` → у `AddTodoForm`, щоб додавати нові завдання;
        - `onDelete(id)` → у `TodoItem`, щоб видаляти завдання зі списку.
---

## AddTodoForm (AddTodoForm.jsx)
- **Роль**: форма для створення нового завдання.
- **State**:
    - `text` → локальний стан, що зберігає введене значення з інпута.
- **Props**:
    - `onAddTodo(text)` → функція, що передається з `TodoList`. Викликається при сабміті форми, щоб додати нове завдання.
---

## TodoItem (TodoItem.jsx)
- **Роль**: відповідає за відображення одного завдання зі списку.
- **State**:
    - `isCompleted` → локальний стан (boolean), що показує, чи завдання виконано.
- **Props**:
    - `task` → об’єкт виду `{ id, text }`, що містить текст завдання.
    - `onDelete(id)` → callback, що викликається при натисканні кнопки “Delete” і передає id у `TodoList`.