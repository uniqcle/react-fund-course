import React from 'react'
import MyButton from './UI/button/MyButton';
import { useHistory } from 'react-router-dom'


const PostItem = ({ post, number, remove }) => {
    const router = useHistory();

    console.log(router)

    return (
        <>
            <div className="post">
                <div className="post__content">
                    <strong>{post.id}.{post.title}</strong>
                    <div>{post.body}</div>
                </div>

                <div className="post__btns">
                    <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Открыть</MyButton>
                </div>

                <div className="post__btns">
                    <MyButton onClick={() => remove(post)}>Удалить</MyButton>
                </div>
            </div>
        </>);
}

export default PostItem;