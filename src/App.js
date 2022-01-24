import React, { useState, useRef, useMemo, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.css'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />

    </BrowserRouter>
  )
}

export default App;
