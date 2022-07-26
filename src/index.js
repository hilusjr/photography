import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Thanks from './components/Thanks'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thank-you" element={<Thanks />} />
      </Route>
    </Routes>
  </HashRouter>
)
reportWebVitals()
