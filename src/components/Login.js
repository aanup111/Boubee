import React, { useState } from 'react'
import '../css/Login.css'
import logo from '../images/image0.jpeg'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../Firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // prevents page from refreshing
        e.preventDefault();
        //firebase authentication
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        // prevents page from refreshing
        e.preventDefault();
        // firebase authentication
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => { 
                // if successfully created user, re- route to home page
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo' 
                    src ={logo} alt='' 
                />
            </Link>
            <div className='login_form'>
                <h1>Sign-in</h1>
                <form>
                    <h4>E-mail</h4>
                    <input type='text' value ={email} onChange= {e => setEmail(e.target.value)}  />

                    <h4>Password</h4>
                    <input type='password' value={password} onChange= {e => setPassword(e.target.value)} />   

                    <button type ='submit' onClick={signIn}>Sign In</button>

                </form>

                <button onClick={register}>Create an account</button>
            </div>
        </div>


    )
}

export default Login
