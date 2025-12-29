
import React from 'react'
import { Route, Routes } from 'react-router'
import PageLayout from './layout/PageLayout'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout/>}>
        <Route  index element={<Home/>}/>
        <Route path="/:id" element ={<DetailPage/>}/>

      </Route>
    </Routes>
  )
}

export default App