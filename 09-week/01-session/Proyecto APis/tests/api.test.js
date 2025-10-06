
const request = require('supertest');
const app = require('../app');
let token = '';
let userId = '';

describe('Pruebas API Usuarios', () => {
  it('Debe crear un nuevo usuario', async () => {
    const res = await request(app)
      .post('/api/usuarios')
      .send({ nombre: 'Juan Pérez', email: 'juan@example.com', password: '123456' });
    expect(res.statusCode).toBe(201);
    userId = res.body.id;
  });

  it('Debe iniciar sesión y obtener un token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'juan@example.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  it('Debe listar usuarios', async () => {
    const res = await request(app)
      .get('/api/usuarios')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  it('Debe obtener usuario por ID', async () => {
    const res = await request(app)
      .get(`/api/usuarios/${userId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  it('Debe actualizar usuario', async () => {
    const res = await request(app)
      .put(`/api/usuarios/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ nombre: 'Juan Actualizado' });
    expect(res.statusCode).toBe(200);
  });

  it('Debe eliminar usuario', async () => {
    const res = await request(app)
      .delete(`/api/usuarios/${userId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
});
