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


## Використані патерни для таблиці

### 1. Компонентний патерн

Таблиця реалізована через декомпозицію на окремі компоненти: `AddressTable`, `TableHeader`, `TableRow`, `EditableCell`. Кожен компонент відповідає за свою власну частину логіки та відображення.

### 2. Розділення відповідальності (Separation of Concerns)

Кожен компонент відповідає лише за одну задачу: `TableHeader` – заголовок, `TableRow` – окремий рядок, `EditableCell` – редагування ячейки.

### 3. Патерн візуалізації списку (List Rendering Pattern)

Адреси зберігаються як масив (books), який ітерується через .map у `AddressTable` для рендерингу рядків за допомогою `TableRow`.

### 4. Контрольований компонент (Controlled Component)

Редаговані поля (Input) у `TableRow` та `EditableCell` управляються через React state.

### 5. Ліфтинг стану (Lifting State Up)

Стан редагування (editingId), а також логіка оновлення запису піднімається у `AddressTable` і пропускається у дочірні компоненти через пропси.

### 6. Умовний рендеринг (Conditional Rendering)

Використовується для показу “No data to display”, якщо список порожній.

***
