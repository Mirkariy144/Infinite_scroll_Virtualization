import { useEffect, useState } from "react"
import { postApi } from "../../shared/api/rtkApi"
import { MyReactWindow } from "./posts/MyReactWindow"
import c from '../../app/globalCSS/Posts.module.css'
import { renderHandler } from "../../entities/render/index"
export const PostsContainer = () => {

  const [postsList, setPostsList] = useState([])
  const [currentPostStart, setCurrentPostStart] = useState(0)
  const {data: posts, isLoading} = postApi.useFetchAllPostsQuery({limit: 15, start: currentPostStart})

  const onItemsRendered = ({ visibleStopIndex }) => {
    renderHandler({ visibleStopIndex, currentPostStart, postsList, setCurrentPostStart })
  }

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
      <MyReactWindow listLength={postsList.length} onItemsRendered={onItemsRendered} postsList={postsList}/>
    </div>
  )
}

