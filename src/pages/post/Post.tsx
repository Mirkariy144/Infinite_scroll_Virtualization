import React from "react";
import { useParams } from "react-router-dom";
import { postApi, NavButton } from "../../shared";
import c from './Post.module.css'

export const Post = () => {

  const { id } = useParams<string>()

  const {data: post, isLoading} = postApi.useFetchPostByIdQuery(id)


  if (isLoading || !post) {
    return <div className={c.post}>Загрузка данных</div>
  }

  return (
    <div className={c.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <NavButton button={'Назад'} nav={'/'} />
    </div>
  )
}
