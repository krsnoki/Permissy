<script src="http://localhost:8097"></script>

import '../styles/global.css';
import '../styles/login.css';
import Navbar from '../components/navbar';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';

function Login() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            console.log('Form values: ', values);
        }
    });


    const scrollRef = useRef(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 4500);

      return () => clearTimeout(timer);
    }, []);

    return (
        <div className='login-container' ref={scrollRef}>
        <Navbar />
        <div className='login-container'>
            <div className='login-area'>
                <div className='loginhead'> <h1>Faculty Login</h1></div>
                <hr/>
                <form onSubmit={ formik.handleSubmit }> 
                    <label 
                    htmlFor='username'>Username: 
                </label>
                <input 
                    type = 'text' 
                    name='username'  
                    onChange={ formik.handleChange}  
                    value= {formik.values.username }/>
                
                <label 
                    htmlFor='password'>Password: 
                </label>
                
                <input 
                    type='password' 
                    name='password' 
                    onChange={ formik.handleChange } 
                    value={ formik.values.password }
                />

                    <button type='submit' name='submit'>submit</button>
                </form>
                <div className='fpass'><h5><a href='#'>Forgot Password ?</a></h5></div>

            </div> 
        </div>
        </div>
    )
}

export default Login
