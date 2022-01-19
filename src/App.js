import React, { useState, useRef } from 'react'
import './styles/App.css'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList'
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

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <PostForm create={createPost} />

      {posts.length
        ? <PostList posts={posts} remove={removePost} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }


    </div>
  );
}

export default App;
