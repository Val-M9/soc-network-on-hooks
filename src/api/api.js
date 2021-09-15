import * as axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0a4139a7-fdb9-4572-8c42-82c0a01fe7d1",
  },
});

export const authAPI = {
  isAuth() {
    return api.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return api.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return api.delete(`auth/login`);
  },
};

export const profileAPI = {
  async getProfile(userId) {
    let response = await api.get(`profile/${userId}`);
    return response.data;
  },
};

export const usersAPI = {
  async getUsers(currentPage, quantityOnPage) {
    let response = await api.get(`users?page=${currentPage}&count=${quantityOnPage}`);
    return response.data;
  },
  follow(userId) {
    return api.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return api.delete(`follow/${userId}`);
  },
};
