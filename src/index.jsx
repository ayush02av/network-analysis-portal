import './styles/index.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Landing from './pages/landing'
import Dashboard from './pages/dashboard'

const Index = () => {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router >
  )
}

export default Index
