import React, { useState } from 'react';
import "./apis.css"


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [numero, setNumero] = useState('');
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch(`https://fine-gold-squid-yoke.cyclic.app/registrarapi?username=${username}&password=${password}&numero=${numero}&key=${key}`);
      const data = await response.json();

      if (response.ok) {
        setMessage(`Usuário ${data.username} registrado com sucesso! Saldo: ${data.saldo}`);
      } else {
        setMessage(data); // Exibe mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setMessage('Erro ao se conectar ao servidor.');
    }
  };

  return (
    <div>
      <h3>Formulário de Registro</h3>
      <center>
      <label>Nome de Usuário:</label> <br />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
         <br />
      <label>Senha:</label> <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         <br />
      <label>Número:</label> <br />
      <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
         <br />
      <label>Chave:</label> <br />
      <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
         <br />
      <button onClick={handleRegister}>Registrar</button>

      {message && <p>{message}</p>}
      </center>
    </div>
  );
};

export default Login;
