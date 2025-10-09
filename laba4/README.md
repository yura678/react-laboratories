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
- **State**: Отримує з хуку `useTodos`: `todos`, `isLoading`, `error`, `deleteTodo`, `toggleTodo`, `addTodo`, `editTodo`, `currentPage`, `totalPages`,
  `limitPerPage`, `goToNextPage`, `goToPrevPage`, `goToPage`, `setLimit`, `searchTerm`, `setSearchTerm`.
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

## Paginator (Paginator.jsx)
- **Роль**: .
- **Функція**: .
- **State**: `pageInput`.
- **Props**:`currentPage`,`totalPages`,`onNextPage`,`onPrevPage`, `limitPerPage`, `onSetLimit`, `onGoToPage` (і додаткові).

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

## Select (Select.jsx)
- **Роль**: Компонент випадаючого списку (dropdown).
- **Функція**: Дозволяє користувачу обирати один із кількох варіантів (наприклад, кількість задач на сторінку).
- **State**: Немає.
- **Props**: `value`, `onChange`, `placeholder`, `children` (і додаткові).

---

## TextArea (TextArea.jsx)
- **Роль**: Компонент для введення багаторядкового тексту..
- **Функція**: Використовується для введення довших описів або коментарів, аналогічний до Input, але з підтримкою кількох рядків.
- **State**: Немає.
- **Props**: `value`, `onChange`, `placeholder` (і додаткові).

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

## Використані патерни

### 1. Компонентний патерн
`TodoList` реалізовано через декомпозицію на окремі компоненти: `Paginator`, `SearchBar`, `AddTodoForm`, `TodoItem`, `Loader`. Кожен компонент відповідає за свою власну частину логіки та відображення.

### 2. Розділення відповідальності (Separation of Concerns)
Кожен компонент відповідає лише за одну задачу: `AddTodoForm` – додавання нового todo, 
`SearchBar` – пошук, `Paginator` – відображення і керування серверною пагінацією, 
`TodoItem` - відображення todo і його редагування, `Loader` - відображення завантажувача.

### 3. Патерн візуалізації списку (List Rendering Pattern)
Todo зберігаються як масив (todos), який ітерується через .map у `TodoList` для рендерингу todo за допомогою `TodoItem`.

### 4. Контрольований компонент (Controlled Component)
Редаговані поля (Input) у `TodoItem` та `AddTodoForm` управляються через React state.

### 5. Ліфтинг стану (Lifting State Up)
Стан, що використовується для управління todo (наприклад, додавання, редагування, видалення), підіймається до батьківських компонента `TodoList`.
Тобто, компоненти-діти сповіщають батьків про зміни через callback-пропси (onAddTodo, onEdit, onDelete), і стан оновлюється у батьківському компоненті, що дозволяє узгоджено оновлювати дані додатку.

### 6. Умовний рендеринг (Conditional Rendering)
Використовується для показу `Loader`, при звертанні до API.

### 7. Компоненти з розширюваними пропсами (Props Spreading/Composition Pattern)
   Базові компоненти на кшталт `Button`, `Input`, `Typography` можуть отримувати й поширювати додаткові пропси (...props) для розширення функціоналу, що полегшує повторне використання та кастомізацію компонентів через композицію.
***
