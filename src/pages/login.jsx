import '../styles/global.css';
import '../styles/login.css';
import Navbar from '../components/navbar';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

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
        <>
            <Navbar />
            <div className='login-container' ref={scrollRef}>
                <div className='login-container'>
                    <div className='login-area'>
                        <div className='loginhead'> <h1>Faculty Login</h1></div>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>


                        {/*  <div class="col-3 input-effect">
        	<input class="effect-16" type="text" placeholder="">
            <label>First Name</label>
            <span class="focus-border"></span>
        </div> */}
                            <label
                                htmlFor='username'>Username:
                            </label>
                            <input
                                type='text'
                                name='username'
                                onChange={formik.handleChange}
                                value={formik.values.username} />

                            <label
                                htmlFor='password'>Password:
                            </label>

                            <input
                                type='password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />

                            

                            <button type='submit' name='submit'>submit</button>
                            
                            <div className='fpass'><h5><Link to='/resetPassword' style={LinkStyle}>Forgot Password ?</Link></h5></div>
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
export default Login
