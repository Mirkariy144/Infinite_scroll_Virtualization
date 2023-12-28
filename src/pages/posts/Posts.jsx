import { useEffect, useState } from "react"
import { postApi, MyReactWindow, NavButton } from "../../shared"
import c from './Posts.module.css'

export const Posts = () => {

  const [postsList, setPostsList] = useState([])
  const [currentPostStart, setCurrentPostStart] = useState(0)
  const {data: posts, isLoading} = postApi.useFetchAllPostsQuery({limit: 15, start: currentPostStart})

  const onItemsRendered = ({ visibleStopIndex }) => {
    if (visibleStopIndex >= currentPostStart + 10 && visibleStopIndex <= postsList.length) {
      setCurrentPostStart(prev => prev + 15)
    }
  }

  const renderRow = (index) => {
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

  useEffect(() => {
    if (posts) {
      setPostsList(prev => [...prev, ...posts.data])
    }
  }, [posts])

  if (isLoading) {
    return <div>Загрузка данных</div>
  }

  return (
    <div className={c.PostContainer}>
      <MyReactWindow listLength={postsList.length} onItemsRendered={onItemsRendered} postsList={postsList} renderRow={renderRow}/>
    </div>
  )
}

