import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { FavoritePages } from './pages/FavouritePages'
import { Navigation } from './components/Navigation'

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/favourites' element={ <FavoritePages /> } />
      </Routes>

    </>
  )
}

export default App
