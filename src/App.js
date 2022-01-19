import React, { useState, useRef } from 'react'
import './styles/App.css'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Js', body: 'description js' },
    { id: 2, title: 'Js2', body: 'description js' },
    { id: 3, title: 'Js3', body: 'description js' },
    { id: 4, title: 'Js4', body: 'description js' },
    { id: 5, title: 'Js5', body: 'description js' },
    { id: 6, title: 'Js6', body: 'description js' },
    { id: 7, title: 'Js7', body: 'description js' }
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }



  return (
    <div className="App">

      <PostForm create={createPost} />

      <PostList posts={posts} title="Список постов1" />

    </div>
  );
}

export default App;
