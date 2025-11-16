import { BlogPost, Posts } from "@/types/general"

// lib/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  const response = await fetch(url, config)
  
  if (!response.ok) {
    throw new ApiError(response.status, `HTTP ${response.status}: ${response.statusText}`)
  }

  console.log('API Response:', response)
  
  return response.json()
}

// API functions
export const api = {
  // GET requests
  getPosts: () => apiRequest<Posts>('/posts', {
    method: 'GET'
  }),
  getPost: (id: string) => apiRequest<BlogPost>(`/posts/${id}`, {
    method: 'GET'
  }),
  
  // POST requests
//   createPost: (data: CreatePostData) => 
//     apiRequest<Post>('/posts', {
//       method: 'POST',
//       body: JSON.stringify(data),
//     }),
  
//   updatePost: (id: string, data: UpdatePostData) =>
//     apiRequest<Post>(`/posts/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(data),
//     }),
  
//   deletePost: (id: string) =>
//     apiRequest<void>(`/posts/${id}`, {
//       method: 'DELETE',
//     }),
}