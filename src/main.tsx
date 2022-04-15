import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Rank } from './componets/Rank'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="rank" element={<Rank />} />
        <Route path='*' element={<main className='w-full h-screen flex justify-center items-center flex-col text-white'>
          <p className='text-4xl text-center'>OOPS this page is broken</p>
          <Link className='underline my-6 text-2xl' to="/">Go back to home </Link>
        </main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
