# Avance Proyecto – Gestión de Hábitos Saludables
## Backend Funcional + Layout (Frontend en Ionic)

**Autor:** David Felipe Perdomo Castillo 

**Institución:** Corhuila

**Fecha:** 2025-10-13

---

## 1. Resumen del avance
Se ha desarrollado un backend funcional con Node.js y Express usando LowDB como almacenamiento local para facilitar la ejecución en entornos académicos. Además, se creó un layout frontend en **Ionic + Vue** que refleja las pantallas principales definidas en el prototipo Figma incluido en el material entregado.

## 2. Backend
- Endpoints implementados:
  - POST /api/auth/register
  - POST /api/auth/login
  - GET /api/habits
  - POST /api/habits
  - PUT /api/habits/:id
  - DELETE /api/habits/:id
  - POST /api/records
  - GET /api/progress

- Base de datos: lowdb (db.json)

## 3. Frontend (Ionic + Vue)
Se proporcionó una estructura de proyecto Ionic con las vistas:
- HomePage.vue
- LoginPage.vue
- RegisterPage.vue
- ProgressPage.vue

Componentes clave:
- HabitCard.vue
- services/api.ts (conexión a la API)

## 4. Instrucciones para ejecutar
1. Backend:
   ```
   cd backend
   npm install
   npm start
   ```
   Backend en http://localhost:4000

2. Frontend (Ionic):
   ```
   cd habitos-app
   npm install
   ionic serve
   ```

## 5. Próximos pasos
- Migrar DB a PostgreSQL o MongoDB
- Autenticación con JWT
- Notificaciones push
- Mejoras de UX y accesibilidad

---
