import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)

  const increment = () => {
    setLikes(likes + 1)
  }

  const decrement = () => {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h2>{likes}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
