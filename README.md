# 🌤️ Todo App — Тестовое задание 

Простое веб-приложение для управления списком задач
 
 ## 📌 Сделано по порядку выполнения

- Добавлен и настроен Prettier
- Подключён Tailwind CSS
- Настроен path resolver (`@/src`)
- Выбрана архитектура FSD
- Создан слой `app`, добавлены глобальные провайдеры
- Реализован custom `Router` с HOC `withRouter`, добавлен слой `pages` и страница `not-found`
- Создан слой `entities` с ресурсом `todo`
  - В `todo/model` реализованы actions, reducers и selectors для кастомного Redux-хранилища (на базе `useReducer` + `useContext`)
 - добавлен state-manager на основе `useReducer` и `useContext` в архитектурном стиле Redux (разделение на actions, reducer, store)
