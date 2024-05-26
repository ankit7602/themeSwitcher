import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home'
import CountryDetail from './Components/CountryDetail'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/country-detail/:id" element={<CountryDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
