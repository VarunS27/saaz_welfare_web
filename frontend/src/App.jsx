import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Donate from './components/pages/Donate'
import Events from './components/pages/Events'
import Gallery from './components/pages/Gallery'
import ContactUs from './components/pages/ContactUs'
import Navbar from './components/pages/Navbar'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
    <div className='min-h-screen bg-white'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      </div>
    </>
  )
  }


export default App
