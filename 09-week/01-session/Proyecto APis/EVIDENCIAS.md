#  Como irian las  Pruebas en Postman

##  1. Crear Usuario
**Request:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
```
**Response (201 Created):**
```json
{
  "id": "c1a2b3...",
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "fecha_creacion": "2025-10-06T10:00:00Z"
}
```

##  2. Listar Usuarios
**Response (200 OK):**
```json
[
  {
    "id": "c1a2b3...",
    "nombre": "Juan Pérez",
    "email": "juan@example.com"
  }
]
```

##  3. Login Usuario
**Request:**
```json
{
  "email": "juan@example.com",
  "password": "123456"
}
```
**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 4. Actualizar Usuario
**Request:**
```json
{
  "nombre": "Juan Actualizado"
}
```
**Response (200 OK):**
```json
{
  "id": "c1a2b3...",
  "nombre": "Juan Actualizado",
  "email": "juan@example.com"
}
```

##  5. Eliminar Usuario
**Response (200 OK):**
```json
{
  "message": "Usuario eliminado correctamente"
}
```

---
