import { useMemo } from 'react'
export const usePagintation = (totalPage) => {
    let result = useMemo(() => {
      let pages = []
      for (let i = 0; i < totalPage; i++){
        pages.push(i + 1)
      }
      return pages
    }, [totalPage])
    return result
}