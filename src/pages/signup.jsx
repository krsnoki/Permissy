import '../styles/global.css';
import '../styles/signup.css';
import { useFormik } from 'formik';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate;

    const handleRedirect = (role) => {
        if (role === 1) {
            navigate('/faculty-dashboard');
        } else if (role === 2) {
            navigate('/student-dashboard');
        }
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            username: '',
            role: '',
            email: '',
            password: ''
        },
        onSubmit: async values => {
            try {
                // You can send the signup request here
                const response = await axios.post('http://localhost:5000/api/users/auth/signup', values);
                handleRedirect(response.data.role);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    });

    return (
        <>
            <div className='login-container'>
                <div className='signup-container'>
                    <div className='signup-area'>
                        <div className='signuphead'> <h1>Sign Up</h1></div>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <label>Name:</label>
                            <input
                                type='text'
                                name='name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <label>Phone:</label>
                            <input
                                type='tel'
                                name='phone'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            <label>Username:</label>
                            <input
                                type='text'
                                name='username'
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            <label>Select Role:</label>
                            <select
                                id='role'
                                name='role'
                                onChange={formik.handleChange}
                                value={formik.values.role}
                            >
                                <option value=''>Select</option>
                                <option value='1'>Faculty</option>
                                <option value='2'>Student</option>
                            </select>
                            <label>Email:</label>
                            <input
                                type='email'
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label>Password:</label>
                            <input
                                type='password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <button type='submit' name='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
