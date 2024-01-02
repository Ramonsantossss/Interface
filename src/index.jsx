import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Caps from './pages/caps';
import Home from './pages/home.jsx';
import Chats from './pages/chat/index.jsx';
import Api from "./pages/apis.jsx"
import './App.css';


function App() {
  return (
    <div className='geral'>
      <React.Fragment>
       <BrowserRouter>
      <Header />
        <Switch>
         <Route exact path="/" component={Home} />
          <Route exact path="/manga/:nome" component={Caps}/>
      </Switch>
      <Footer />
         <Route exact path="/chat" component={Chats}/>
         <Route exact path="/fav" component={Api} />
       </BrowserRouter>
    </React.Fragment>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
       <App />
      
    </BrowserRouter>
  </React.StrictMode>
)