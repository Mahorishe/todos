import { useMemo } from "react"

export const useSortedPost = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if(sort && posts) {
      return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  return sortedPost
}

export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedPost(posts, sort)
  const sortedAndSearchPost = useMemo(() => {
    return sortedPost.filter((post) => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }, [query, sortedPost])

  return sortedAndSearchPost
}