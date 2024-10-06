import { useState } from 'react';
import './App.css';
import background from './assets/background1.jpg'; // Fondo del universo
import logo from './assets/logo.png'; // Asegúrate de tener el logo correcto

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div 
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Contenedor del logo */}
      <div className="logo-container">
        <img src={logo} alt="App Logo" className="app-logo" />
      </div>

      {/* Tarjeta de sign-in */}
      <div className="sign-in-card">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your name"
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password"
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default App;
