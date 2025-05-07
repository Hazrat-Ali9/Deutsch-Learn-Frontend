import axios from "axios";

const API_URL = "http://localhost:7000";

export const uploadBook = async (formData: FormData) => {
  return axios.post(`${API_URL}/upload-book`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const Book = async (formData: FormData) => {
  return axios.post(`${API_URL}/add-book`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getStoreBooks = async () => {
  return axios.get(`${API_URL}/bookstore`);
};
export const getBooks = async () => {
  return axios.get(`${API_URL}/books`);
};