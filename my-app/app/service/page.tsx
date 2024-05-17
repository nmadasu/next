import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = async () => {
  return await api.get<Post[]>('/posts');
};
export const fetchPost = async (id: number) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  };
export const deletePost = async (id: number) => {
  return await api.delete(`/posts/${id}`);
};
export const createPost = async (post: { title: string; body: string; userId: number; }) => {
    const response = await api.post('/posts', post);
    return response.data;
  };
  
  export const updatePost = async (id: number, post: { title: string; body: string; userId: number; }) => {
    const response = await api.put(`/posts/${id}`, post);
    return response.data;
  };
export default api;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
