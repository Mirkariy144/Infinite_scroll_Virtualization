import React from 'react';
import { Post } from '../../../entities';
import { useParams } from 'react-router-dom';

export const PostPage = () => {
  const { id } = useParams<string>();
  if (!id) {
    return null;
  }
  return <Post id={id} />;
};
