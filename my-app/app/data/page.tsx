'use client'
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Paper } from '@mui/material';
import { fetchPosts, deletePost, Post } from '../service/page'
import PostForm from '../create/page'
import UserUpdateForm from '../update/[id]/page';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from 'axios';

function PostTable() {  
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();
    const api = axios.create()
    useEffect(() => {
        const loadPosts = async () => {
            // const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await fetch('http://172.17.15.74:3000/apis/users')
            //   const response = await fetchPosts();
            const response = await data.json()
            setPosts(response);
        }
        loadPosts();
    }, []);
    const handleDelete = async (id: number) => {
        const data = await api.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(data);
        // await deletePost(id);
        setPosts(posts.filter(post => post.id !== id));
        alert(`ID: ${id} is deleted`)
    };
    const edit = async (id: number) => {
   
        console.log("edit");
        router.push(`/update/${id}`);
    };
    const create=async()=>{
        console.log("added");
        router.push('/create')
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Button color="primary"  onClick={() => create()}>Add</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>
                                {/* <Button color="primary" onClick={() => alert('Edit function not implemented.')}>Edit</Button> */}
                                <Button color="primary" onClick={() => edit(post.id)}>Edit</Button>
                                <Button color="secondary" onClick={() => handleDelete(post.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default PostTable;
