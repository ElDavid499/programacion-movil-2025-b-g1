import axios from 'axios';
const API = 'http://localhost:4000/api';

export async function register(user) {
  const r = await axios.post(API + '/auth/register', user);
  return r.data;
}
export async function login(payload) {
  const r = await axios.post(API + '/auth/login', payload);
  return r.data;
}
export async function getHabits(userId) {
  const r = await axios.get(API + '/habits?userId=' + userId);
  return r.data;
}
export async function createHabit(habit) {
  const r = await axios.post(API + '/habits', habit);
  return r.data;
}
export async function markRecord(record) {
  const r = await axios.post(API + '/records', record);
  return r.data;
}
