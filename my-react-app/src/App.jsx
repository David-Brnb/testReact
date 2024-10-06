import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Importar configuración de Firebase
import './App.css';
import background from './assets/background1.jpg'; 
import logo from './assets/logo.png';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Llamar a Firebase Auth para iniciar sesión
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        setError("Se pudo")
        console.log('User signed in:', user);
        // Aquí puedes redirigir al usuario o realizar alguna acción después del inicio de sesión
      })
      .catch((error) => {
        // Manejar errores de inicio de sesión
        setError(error.message);
        console.error('Error signing in:', error);
      });
  };

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
        <form className='SignUp' onSubmit={handleSignIn}>
          <h1>Login</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>
            Username (Email):
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your email"
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
