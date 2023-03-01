import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Footer />
        <Routes>
          <Route exact path="/Hyde_St" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App;
