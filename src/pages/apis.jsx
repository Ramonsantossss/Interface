import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './apis.css';
import Sidebar from './menu';

function Api() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      handleLogin(savedUsername, savedPassword);
    }
  }, []);

  const handleLogin = async (user, pass) => {
    try {
      const response = await fetch(`https://fine-gold-squid-yoke.cyclic.app/entrarr?nome=${user}&senha=${pass}`);

      if (response.ok) {
        const data = await response.json();

        if (data === null || Object.keys(data).length === 0) {
          setLoginError('Usuário ou senha incorretos.');
        } else {
          localStorage.setItem('username', user);
          localStorage.setItem('password', pass);
          setLoggedIn(true);
          setLoginError('');
          setUserDetails(data);
        }
      } else {
        setLoginError('Ocorreu um erro ao fazer login. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError('Ocorreu um erro ao fazer login. Tente novamente.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setUsername('');
    setPassword('');
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <br />
        <div className='main'>
          <div className='card'>
            <br />
            <img className='foto-perfil' src={userDetails.ft} alt="Foto de Perfil" />
            <div className='textoo'>
              <p className='spoan'>Nome: {userDetails.username}</p><br />
              <p className='sopan'>Saldo: {userDetails.saldo}</p><br />
              <p className='sopan'>Nivel: {userDetails.total}</p><br />
              <p className='sopan'>Chave/Key: {userDetails.key}</p><br />
              <p className='sopan'>Id: {userDetails._id}</p><br />
            </div>
          </div>
          <Sidebar />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <center>
      <div className="main">
        <h1>Login</h1>
        {loginError && <p className="ttt">{loginError}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button onClick={() => handleLogin(username, password)}>Login</button>
      <br />
        <Link to="/signup">Criar conta</Link>
      </div>
      <br /><br /><br /><br />
    </center>
  );
}

export default Api;
