# Backend - Gestión de Hábitos Saludables (Demo)
Rápido backend con Express y lowdb (archivo JSON como base de datos para demo).
## Requisitos
- Node.js
- npm
## Instalación
```bash
cd backend
npm install
npm start
```
## Endpoints principales
- POST /api/auth/register { name, email }
- POST /api/auth/login { email }
- GET /api/habits?userId=<id>
- POST /api/habits { userId, tipo, descripcion, frecuencia }
- PUT /api/habits/:id
- DELETE /api/habits/:id
- POST /api/records { userId, habitId, fecha, cumplido }
- GET /api/progress?userId=<id>
