import '../styles/global.css';
import '../styles/login.css';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async values => {
            try {
                const response = await axios.post('http://localhost:3000/auth/login', values);
                const userData = response.data.payload; 
                alert("userdata: " + userData.role);
                console.log(userData);
                // Assuming the API returns the role
                if (userData.role === "faculty") {
                    navigate('/faculty-dashboard', { userData });
                } else if (userData.role === "student") {
                    navigate('/student-dashboard', { userData });
                }
            
            } catch (error) {
                setErrorMessage('Invalid credentials. Please try again.' + error); 
                console.log(error)// Display error message
            }
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
        <>
            <div className='login-container' ref={scrollRef} id='login'>
                <div className='login-container'>
                    <div className='login-area'>
                        <div className='loginhead'> <h1>Login</h1></div>
                        <hr />
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor='username'>Username:</label>
                            <input
                                type='text'
                                name='username'
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            <label htmlFor='password'>Password:</label>
                            <input
                                type='password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <button type='submit' name='submit'>Submit</button>
                            <div className='fpass'><h4><Link to='/resetPassword' style={LinkStyle}>Forgot Password ? </Link>or <a href='/signup' style={LinkStyle}>New User</a></h4></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const LinkStyle = {
    color: 'white',
    textDecoration: 'none'
};

export default Login;
