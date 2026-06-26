# 📱 Task Manager App (React Native + Expo)

A simple task management app built with **React Native (Expo) + TypeScript**, featuring CRUD operations, local storage, and data fetching from a public API.

## Features

- Add new tasks
- View task list
- Search tasks by title
- Filter tasks (All / Completed / Pending)
- Mark tasks as completed / incomplete
- Edit tasks
- Delete tasks
- Task details screen
- Persistent storage with AsyncStorage
- Fetch initial tasks from a public API
- Clean and responsive UI

## Tech Stack

- React Native (Expo)
- TypeScript
- Expo Router (navigation)
- Context API (state management)
- AsyncStorage (local persistence)
- Fetch API (public data source)

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd todo-list-mobile
```

### 2. Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Start the development server

```bash
npx expo start
```

Then choose:

- Android emulator
- iOS simulator
- Web (press `w`)

## Public API Used

The app fetches initial tasks from:

```
https://jsonplaceholder.typicode.com/todos
```

This is used as fallback data when no local tasks exist.

## State Management

All task operations are handled via **Context API**:

- addTask
- deleteTask
- updateTask
- toggleTask
- getTask

Data is automatically persisted using **AsyncStorage**.

## Key Implementation Notes

- Uses functional components and React Hooks
- Centralized state with Context API
- AsyncStorage for persistence across app reloads
- Public API used to preload initial data
- Input validation for task creation and updates
- Navigation handled via Expo Router dynamic routes
