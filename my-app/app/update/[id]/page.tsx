'use client'
import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { updatePost, fetchPost } from '@/app/service/page';
import { useRouter } from 'next/navigation';

export default function UserUpdateForm ({ params }: { params: { id: number } })  {
    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: 1,
    });
 
    const router = useRouter();
    const postId=  params.id

    useEffect(() => {
        if (postId) {
            (async () => {
                const fetchedPost = await fetchPost(postId);
                setPost({ title: fetchedPost.title, body: fetchedPost.body, userId: fetchedPost.userId });
            })();
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (postId) {
            try {
              const response=  await updatePost(postId, post);
              console.log(response);
                router.push('/data');
            } catch (error) {
                console.error('Failed to update user:', error);
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                label="Title"
                name="title"
                value={post?.title || ''}
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
                value={post?.body || ''}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                { 'Update User'}
            </Button>
        </Box>
    );
};
