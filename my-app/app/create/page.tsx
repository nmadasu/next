'use client'
import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { createPost, updatePost, fetchPost } from '../service/page';
import { useRouter } from 'next/navigation'; 

interface PostFormProps {
  postId?: number; // If postId is provided, it's an edit form
}

const PostForm: React.FC<PostFormProps> = ({ postId }) => {

 
  const [post, setPost] = useState({
    title: '',
    body: '',
    userId: 1, // Typically, you'd fetch this from user's session or state
  });
  const router = useRouter();
  useEffect(() => {
    if (postId) {
      (async () => {
        const fetchedPost = await fetchPost(postId);
        setPost({ title: fetchedPost.title, body: fetchedPost.body, userId: fetchedPost.userId });
      })();
    }
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (postId) {
      await updatePost(postId, post);
    } else {
     var added= await createPost(post);
      console.log(added);
      router.push('/data')
    }
    // Redirect or show success message
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Title"
        name="title"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="body"
        label="Body"
        multiline
        rows={4}
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {postId ? 'Update User' : 'Add User'}
      </Button>
    </Box>
  );
};

export default PostForm;
