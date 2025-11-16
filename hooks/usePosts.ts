'use client'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: api.getPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function usePost(id: string) {
  return useQuery({
    queryKey: ['posts', id],
    queryFn: () => api.getPost(id),
    enabled: !!id, // Only run if ID exists
  })
}