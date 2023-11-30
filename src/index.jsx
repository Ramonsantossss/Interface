import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Home from './pages/home.jsx'
import './App.css'

function App() {
  return (
    <div className='geral'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)