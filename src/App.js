import React, { useState, useRef, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm';
import _ from 'lodash'
import PostFilter from './components/PostFilter';

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


  const sortedPosts = useMemo(() => {
    console.log('Отрабаотала ф-я сортед')
    if (filter.sort) {
      return _.sortBy([...posts], filter.sort);
    }
    return posts;
  }, [filter.sort, posts]);


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <PostForm create={createPost} />

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length
        ? <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }


    </div>
  );
}

export default App;
