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


  const [userDetails, setUserDetails] = useState(null); // Estado para armazenar os detalhes do usuário
  const handleLogin = async (user, pass) => {
    try {
      const response = await fetch(`https://happy-red-hummingbird.cyclic.app/entrarr?nome=${user}&senha=${pass}`);

      if (response.ok) {
        const data = await response.json();

        if (data === null || Object.keys(data).length === 0) {
          // Usuário não encontrado ou dados vazios
          setLoginError('Usuário ou senha incorretos.');
        } else {
          // Usuário encontrado, dados retornados pela API
          localStorage.setItem('username', user);
          localStorage.setItem('password', pass);
          setLoggedIn(true);
          setLoginError('');
          setUserDetails(data); // Armazena os detalhes do usuário no estado
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
    <div className='main'>
      <h1>Bem-vindo(a), {userDetails.username}!</h1>
      <div className='card'>
        <center>
        <img className='foto-perfil' src={userDetails.ft}/>
        </center><br></br>
        <p className='span'>Nome: {userDetails.username}</p><br></br>
        <p className='span'>Saldo: {userDetails.saldo}</p><br></br>
        <p className='span'>Nivel: {userDetails.total}</p><br></br>
        <p className='span'>Chave/Key: {userDetails.key}</p><br></br>
        <p className='span'>Id: {userDetails._id}</p><br></br>
      </div>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
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
