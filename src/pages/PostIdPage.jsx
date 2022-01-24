import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPage(props) {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    });

    const [fetchCommentsById, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    });


    useEffect(() => {

        fetchPostById();
        fetchCommentsById()
    }, []);

    return (
        <div>
            post page {params.id}
            {isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
            }

            <h2>Комментарии</h2>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(com =>
                        <div key={com.email}>
                            <h5> {com.email} </h5>
                            <div>{com.body} </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;