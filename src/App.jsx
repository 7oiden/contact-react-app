import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
