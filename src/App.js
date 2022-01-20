import React, { useState, useRef, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm';
import _ from 'lodash'
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'Новая парадигма реальности: чистосердечное признание облегчает душу' },
    { id: 2, title: 'b', body: 'Независимые СМИ потому и независимы, что спикеры палаты госдумы негодуют' },
    { id: 3, title: 'd', body: 'Звук клавиш печатной машинки стал нашим флагом в борьбе с ложью' },
    { id: 4, title: 'c', body: 'Органический трафик ни к чему нас не обязывает' },
    { id: 5, title: 'e', body: 'Сложно сказать, почему парад бытовой техники оказался началом великой войны' },
    { id: 6, title: 'd', body: 'Нашу победу сопровождал треск разлетающихся скреп' },
    { id: 7, title: 'h', body: 'Курс на социально-ориентированный национальный проект связывает нас с нашим прошлым' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>

      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>Создать пользователя</MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />

    </div>
  );
}

export default App;
