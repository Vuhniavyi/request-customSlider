import React, { useState, useEffect, useCallback } from 'react';
import { Post } from 'Blocks/Post/index';
import { PostsContainer, ViewMoreText, Create } from './styles';
import { useQuery, useMutation } from 'react-query';
import { FormComponent } from 'Blocks/Form/index';
import { confirmAlert } from 'react-confirm-alert';
import { getRandomInt } from 'Helpers/index';
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const PostsWrapper = () => {
  const [viewMore, setViewMore] = useState(false);
  const [viewMoreText, setViewMoreText] = useState('View more comments');

  const { data } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json(),
    ),
  );
  const [numberPosts, setNumberPosts] = useState(data?.slice(0, 9));

  useEffect(() => {
    setNumberPosts(data?.slice(0, 9));
  }, [data]);

  useEffect(() => {
    if (!viewMore) {
      setNumberPosts(data?.slice(0, 9));
      setViewMoreText('View more Posts');
    } else {
      setNumberPosts(data);
      setViewMoreText('View less Posts');
    }
  }, [viewMore]);

  const handleViewMore = () => {
    setViewMore((view) => !view);
  };

  const onDeletePost = useCallback((id) => {
    setNumberPosts((post: any) => {
      const newArray = post.filter((el: any) => el.id !== id);
      return newArray;
    });
  }, []);

  const onCreatePost = useCallback((data) => {
    setNumberPosts((posts: any) => {
      return [...posts, data];
    });
  }, []);

  const mutationCreate = useMutation(
    (formData: any) =>
      axios.post(`https://jsonplaceholder.typicode.com/posts`, formData),
    {
      onSuccess: (data) => {
        onCreatePost(data.data);
      },
    },
  );

  const submitCreate = () => {
    confirmAlert({
      // eslint-disable-next-line react/display-name
      customUI: ({ onClose }) => {
        const onSubmit = (data: any) => {
          mutationCreate.mutate({ title: data.title, body: data.body });
          onClose();
        };

        return <FormComponent onSubmit={onSubmit} onClose={onClose} />;
      },
    });
  };

  return (
    <>
      <PostsContainer>
        {numberPosts?.map((el: any) => (
          <Post
            keyId={el.id}
            key={el.id}
            title={el.title}
            image={`https://picsum.photos/100/200?random=${getRandomInt(
              data.length,
            )}`}
            text={el.body}
            onDeletePost={onDeletePost}
          />
        ))}
      </PostsContainer>
      <Create onClick={submitCreate}>Create</Create>
      <ViewMoreText onClick={handleViewMore}>{viewMoreText}</ViewMoreText>
    </>
  );
};
