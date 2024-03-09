import React from 'react';
import { useEffect, useState } from 'react';
import { postApi, MyReactWindow, NavButton } from '../../../shared';
import { postsList } from '../model/models';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const PostsList = () => {
  const [postsList, setPostsList] = useState<postsList[]>([]);
  const [currentPostStart, setCurrentPostStart] = useState<number>(0);
  const { data: posts, isLoading } = postApi.useFetchAllPostsQuery({
    limit: 15,
    start: currentPostStart,
  });

  const onItemsRendered = ({
    visibleStopIndex,
  }: {
    visibleStopIndex: number;
  }) => {
    if (
      visibleStopIndex >= currentPostStart + 10 &&
      visibleStopIndex <= postsList.length
    ) {
      setCurrentPostStart((prev) => prev + 15);
    }
  };

  useEffect(() => {
    if (posts) {
      setPostsList((prev) => [...prev, ...posts]);
    }
  }, [posts]);

  const renderRow = (index: number) => {
    const post = postsList[index];
    return (
      <Box
        component={'div'}
        key={post.id}
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '5px',
        }}
      >
        <Card
          variant="outlined"
          key={post.id}
          sx={{
            width: '1100px',
            height: '90px',
            margin: '5px',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '90px',
              padding: '0px',
              paddingBottom: '0px',
              backgroundColor: '#1A2027',
            }}
          >
            <Typography variant="h6" margin={1} color={'white'}>
              №{post.id}
            </Typography>
            <CardContent
              sx={{
                flexGrow: 1,
                overflow: 'hidden',
                textAlign: 'start',
              }}
            >
              <Typography variant="h6" margin={1} color={'white'}>
                {post.title}
              </Typography>
              <Typography
                variant="body1"
                textOverflow={'ellipsis'}
                overflow={'hidden'}
                margin={1}
                whiteSpace={'nowrap'}
                color={'white'}
              >
                {post.body}
              </Typography>
            </CardContent>
            <Box sx={{ margin: '5px' }}>
              <NavButton button={'Посмотреть'} nav={`/post/${post.id}`} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  };

  if (isLoading) {
    return <div>Загрузка данных</div>;
  }

  return (
    <Box sx={{ width: '1100px', margin: '0 auto' }}>
      <MyReactWindow
        listLength={postsList.length}
        onItemsRendered={onItemsRendered}
        renderRow={renderRow}
      />
    </Box>
  );
};
