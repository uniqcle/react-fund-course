import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Текст в инпуте')

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
      <hr />
      <h2>{value}</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}

export default App;
