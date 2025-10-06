
# API REST Gestión de Usuarios

API REST básica para gestionar usuarios, creada con **Node.js + Express** como parte del taller *Creación de APIs Simples para Usuarios*.

## Endpoints
- **POST /api/usuarios** → Crear usuario
- **GET /api/usuarios** → Listar usuarios (requiere token)
- **GET /api/usuarios/:id** → Obtener usuario (requiere token)
- **PUT /api/usuarios/:id** → Actualizar usuario (requiere token)
- **DELETE /api/usuarios/:id** → Eliminar usuario (requiere token)
- **POST /api/auth/login** → Iniciar sesión

## Ejemplo de Request
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
```

## Ejemplo de Response
```json
{
  "id": "uuid",
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "fecha_creacion": "2025-10-06T00:00:00Z"
}
```

## Pruebas
Ejecutar el servidor:
```bash
npm install
npm start
```

Correr pruebas automáticas:
```bash
npm test
```
