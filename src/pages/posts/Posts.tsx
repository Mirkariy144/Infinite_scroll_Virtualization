import React from "react"
import { useEffect, useState } from "react"
import { postApi, MyReactWindow, NavButton } from "../../shared"
import c from './Posts.module.css'
import { fetchAllPostsResponse } from "../../shared/api/rtkApi"

export const Posts = () => {

  const [postsList, setPostsList] = useState<fetchAllPostsResponse[]>([])
  const [currentPostStart, setCurrentPostStart] = useState<number>(0)
  const {data: posts, isLoading} = postApi.useFetchAllPostsQuery({limit: 15, start: currentPostStart})

  const onItemsRendered = ({visibleStopIndex} : {visibleStopIndex: number}) => {
    if (visibleStopIndex >= currentPostStart + 10 && visibleStopIndex <= postsList.length) {
      setCurrentPostStart(prev => prev + 15)
    }
  }

  useEffect(() => {
    if (posts) {
      setPostsList((prev) => [...prev, ...posts])
    }
  }, [posts])

  const renderRow = (index: number) => {
    const post = postsList[index];
    return (
      <div className={c.post}>
        <p className={c.postNum}>№{post.id}</p>
        <div className={c.postContent}>
          <p className={c.postTitle}>{post.title}</p>
          <p className={c.postBody}>{post.body}</p>
        </div>
        <NavButton button={'Посмотреть'} nav={`/post/${post.id}`} />
      </div>
    )}

  if (isLoading) {
    return <div>Загрузка данных</div>
  }


  return (
    <div className={c.PostContainer}>
      <MyReactWindow listLength={postsList.length} onItemsRendered={onItemsRendered} renderRow={renderRow}/>
    </div>
  )
}

