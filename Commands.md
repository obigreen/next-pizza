# Commands (npm)

Пошаговый набор команд для этого проекта в логичной последовательности.

## 1) Перейти в папку, где будет создан проект

```bash
cd /Users/sergeybudyakin/Desktop/inWork
```

## 2) Создать новый Next.js проект

Стандартный вариант (локальный Git создастся автоматически):

```bash
npx create-next-app@latest x-next-course
```

Вариант без автосоздания локального Git:

```bash
npx create-next-app@latest x-next-course --disable-git
```

## 3) Перейти в папку созданного проекта

```bash
cd /Users/sergeybudyakin/Desktop/inWork/x-next-course
```

## 4) Открыть проект в WebStorm

Запуск из папки проекта:

```bash
open -na "WebStorm.app" --args "$PWD"
```

## 5) Команда запуска проекта (dev)

```bash
npm run dev
```

## 6) Проверка кода

Проверка линтером:

```bash
npm run lint
```

Проверка TypeScript-типов без сборки:

```bash
npx tsc --noEmit
```

## 7) Работа с пакетами

Шаблон: установить пакет

```bash
npm i <package-name>
```

Шаблон: удалить пакет

```bash
npm uninstall <package-name>
```

Специализированный пакет из проекта: `path-to-regexp`  
Используется для надежного матчинга путей (например, активные пункты меню на динамических маршрутах):

```bash
npm i path-to-regexp
```

## 8) Production-сборка и запуск

Собрать production-версию:

```bash
npm run build
```

Запустить production-сервер локально:

```bash
npm run start
```

## 9) Очистка кэша Next и чистый перезапуск

Использовать, когда в dev-режиме странное поведение (залипшие стили, старые артефакты, конфликт HMR):

```bash
rm -rf .next
npm run dev
```
