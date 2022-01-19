import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' })
    //const bodyInputRef = useRef();


    const addNewPost = (e) => {
        e.preventDefault();
        //console.log(bodyInputRef.current.value)

        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)

        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <MyInput
                type="text"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                placeholder='Название поста'
            />

            <MyInput
                type="text"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                placeholder='Описание поста'
            />

            <MyButton onClick={addNewPost}> Создать поста </MyButton>
        </form>
    );
}

export default PostForm;