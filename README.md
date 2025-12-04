# Valaam - Framer Site Clone

Це репліка сайту [valaam.framer.website](https://valaam.framer.website/) створена на Next.js з TypeScript та Tailwind CSS.

## Встановлення

1. Встановіть залежності:
```bash
npm install
```

2. Запустіть dev сервер:
```bash
npm run dev
```

3. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## Структура проєкту

- `app/` - Next.js App Router файли
  - `page.tsx` - головна сторінка
  - `layout.tsx` - кореневий layout
  - `globals.css` - глобальні стилі
- `components/` - React компоненти
  - `Navbar.tsx` - навігаційна панель
  - `Hero.tsx` - hero секція
  - `Features.tsx` - секція з можливостями
  - `PlatformSection.tsx` - секція про платформу
  - `Integrations.tsx` - секція інтеграцій
  - `Pricing.tsx` - секція з цінами
  - `Testimonials.tsx` - відгуки
  - `Stats.tsx` - статистика
  - `Footer.tsx` - футер

## Технології

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Команди

- `npm run dev` - запуск dev сервера
- `npm run build` - збірка для продакшену
- `npm start` - запуск продакшен сервера
- `npm run lint` - перевірка коду

