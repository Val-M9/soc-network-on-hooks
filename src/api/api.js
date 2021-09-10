import * as axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0a4139a7-fdb9-4572-8c42-82c0a01fe7d1",
  },
});

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
};
