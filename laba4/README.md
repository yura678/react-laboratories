# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Component Tree + Data Flow

![Component Tree + Data Flow](Blank%20diagram.svg)



## Опис компонентів

---

## TodoApp (TodoApp.jsx)
- **Роль**: Головний (root) компонент застосунку.
- **Функція**: Відповідає лише за складання всіх компонентів разом (composition), відображає заголовок і сам список задач.
- **State**: Немає.
- **Props**: Не має власних пропсів.

---

## TodoList (TodoList.jsx)
- **Роль**: Батьківський компонент для списку задач і форми додавання.
- **Функція**: Отримує і управляє todos, передає обробники додавання, видалення та оновлення задач дочірнім компонентам, відповідає за відображення відповідних станів (завантаження, помилки, список задач).
- **State**: Отримує з хуку `useTodos`: todos, isLoading, error, deleteTodo, toggleTodo, addTodo.
- **Props**: Не має власних пропсів.

---

## AddTodoForm (AddTodoForm.jsx)
- **Роль**: Форма додавання нової задачі.
- **Функція**: Зберігає локальний текст задачі, відправляє нову задачу через колбек-батька при submit, скидає поле після додавання.
- **State**: `text` (контролює введення).
- **Props**: `onAddTodo` (функція для додавання задачі).

---

## TodoItem (TodoItem.jsx)
- **Роль**: Окремий елемент списку задач.
- **Функція**: Відображає details задачі, дозволяє редагування стану виконання та видалення задачі через відповідні кнопки, використовує пропи для взаємодії.
- **State**: Немає (використовує пропи для даних та обробників).
- **Props**:
    - `todo` (об'єкт задачі),
    - `onDelete` (функція видалення),
    - `onUpdate` (функція зміни/оновлення задачі).

---

## Button (Button.jsx)
- **Роль**: Універсальна кнопка для взаємодії з юзером.
- **Функція**: Приймає children (вміст), виконує дію при натисканні, підтримує блокування (disabled).
- **State**: Немає.
- **Props**: `onClick`, `children`, `disabled` (і решта, які можуть бути передані).

---

## CheckBox (CheckBox.jsx)
- **Роль**: Чекбокс для позначення статусу виконання задачі.
- **Функція**: Відображає чекбокс у потрібному стані, змінює його при натисканні.
- **State**: Немає.
- **Props**: `isChecked` (стан позначки), `handleCheckboxChange` (функція зміни).

---

## Input (Input.jsx)
- **Роль**: Текстове поле для вводу (універсальне).
- **Функція**: Використовується для вводу тексту (наприклад, нової задачі), передає зміни вгору через пропси.
- **State**: Немає.
- **Props**: `type`, `value`, `onChange`, `placeholder` (і додаткові).

---

## Loader (Loader.jsx)
- **Роль**: Компонент індикатора завантаження.
- **Функція**: Просто показує спінер, коли йде завантаження.
- **State**: Немає.
- **Props**: Немає.

---

## Typography (Typography.jsx)
- **Роль**: Компонент для відображення тексту різного типу (заголовків, абзаців).
- **Функція**: Відображає текст з обраним HTML-тегом (напр. h1, p).
- **State**: Немає.
- **Props**: `variant`, `children` (і додаткові).
