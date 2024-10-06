import { useState } from 'react';
import { auth } from './firebase'; // Importar configuración de autenticación de Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importar método para registro
import './SignUp.css';
import background from './assets/background1.jpg';
import logo from './assets/logo.png';

const SignUp = () => {

    // Input values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            alert("Passwords do not match!");
            return;
        }

        // Crear usuario en Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registro exitoso
                const user = userCredential.user;
                console.log('User registered:', user);
                alert('User registered successfully!');
                // Aquí podrías redirigir al usuario a otra página o realizar alguna acción adicional
            })
            .catch((error) => {
                // Manejo de errores
                console.error('Error registering user:', error);
                alert(error.message);
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
            
            <div className="sign-in-card">
                <form onSubmit={submitForm} className='SignUp'>
                    <h1>SignUp</h1>
                    <p>First name:</p>
                    <input 
                        type="text" 
                        placeholder="Place your first name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />

                    <p>Last name:</p>
                    <input 
                        type="text" 
                        placeholder="Place your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <p>Email:</p>
                    <input 
                        type="email" 
                        placeholder="Place your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <p>Password:</p>
                    <input 
                        type="password" 
                        placeholder="Place your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <p>Confirm password:</p>
                    <input 
                        type="password" 
                        placeholder="Place your password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required
                    />

                    <a href="#">Already have an account? Sign in here.</a>

                    <div className="button-container">
                        <button type="submit">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
