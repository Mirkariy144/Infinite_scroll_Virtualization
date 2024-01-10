import React from 'react';
import { postApi, NavButton } from '../../../shared';
import c from './Post.module.css';

interface PostProps {
  id: string;
}

export const Post = ({ id }: PostProps) => {
  const { data: post, isLoading } = postApi.useFetchPostByIdQuery(id);

  if (isLoading) {
    return <div className={c.post}>Загрузка данных</div>;
  }

  if (!post) {
    return <div className={c.post}>Пост не найден</div>;
  }

  return (
    <div className={c.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <NavButton button={'Назад'} nav={'/'} />
    </div>
  );
};
