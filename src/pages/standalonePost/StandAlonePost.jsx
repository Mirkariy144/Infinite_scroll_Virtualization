import React from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../shared/index";
import { NavButton } from "../../shared/index";
import { loader } from "../../shared/index";

export const StandAlonePost = () => {

  const { id } = useParams()

  const {data: post, isLoading} = postApi.useFetchPostByIdQuery(id)


  if (isLoading) {
    return <div>Загрузка данных</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <NavButton button={'Назад'} nav={-1} />
    </div>
  )
}
