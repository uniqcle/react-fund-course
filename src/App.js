import React, { useState, useRef, useMemo, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Route path="/about">
        <About />
      </Route>
    </BrowserRouter>
  )
}

export default App;
