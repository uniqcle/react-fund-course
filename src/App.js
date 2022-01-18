import React, { useState } from 'react'
import './styles/App.css'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import PostItem from './components/postItem';

function App() {

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Js', body: 'description js' }} />

    </div>
  );
}

export default App;
