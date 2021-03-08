import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id, title} = useParams();
    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])
    return (
        <div>
            <h3>This is detail: {id}</h3>
            <h2>User posted: {post.title}</h2>
            <h3>Comment: {comments.length}</h3>
        </div>
    );
};

export default PostDetail;