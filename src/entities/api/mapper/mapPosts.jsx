import React from "react";
import { NavButton } from "../../../shared";
import c from '../../../app/globalCSS/Posts.module.css'

export  const renderRow = ({index, postsList}) => {
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
  )
}