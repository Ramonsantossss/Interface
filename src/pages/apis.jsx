import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './apis.css';

function Api() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    // Verificar se as credenciais já estão salvas no localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      // Se as credenciais estiverem salvas, fazer login automaticamente
      setUsername(savedUsername);
      setPassword(savedPassword);
      handleLogin(savedUsername, savedPassword);
    }
  }, []);

  const handleLogin = async (user, pass) => {
    try {
      // Substitua 'sua_url_de_login' pela sua URL de login na API Express
      const response = await fetch(`sua_url_de_login?username=${user}&password=${pass}`);

      if (response.ok) {
        const data = await response.json();

        if (data.status === 'success') {
          // Login bem-sucedido
          localStorage.setItem('username', user);
          localStorage.setItem('password', pass);
          setLoggedIn(true);
          setLoginError('');
        } else if (data.status === 'defeat') {
          // Usuário não encontrado ou credenciais incorretas
          setLoginError('Usuário ou senha incorretos.');
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
    // Para fazer logout, limpar os dados salvos no localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setUsername('');
    setPassword('');
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <>
        <h1>Bem-vindo, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return (
    <center>
    <div className="square"> {/* Adicione a classe 'square' aqui */}
      <h1>Login</h1>
      {loginError && <p>{loginError}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin(username, password)}>Login</button>
      <Link to="/signup">Criar conta</Link>
    </div>
      </center>
  );
}

export default Api;
