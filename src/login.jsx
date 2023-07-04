<script src="http://localhost:8097"></script>

import './styles/global.css';
import './styles/login.css';
import { useFormik } from 'formik';

function Login() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            console.log('Form values: ', values);
        }
    })

    return (
    
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
    )
}

export default Login
