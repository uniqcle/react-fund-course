import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPage(props) {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async () => {

        const response = await PostService.getById(params.id)
        setPost(response.data)
    });

    useEffect(() => {
        console.log(params.id)
        fetchPostById();
    }, []);

    return (
        <div>
            post page {params.id}
            {isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
            }

        </div>
    );
}

export default PostIdPage;