import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/fdashboard.css'

function Fdashboard() {
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchName = async (username) => {
        try {
            const response = await axios.get(`http://localhost:5000/findUser?username=${username}`);
            setUsers(response.data);
            setErrorMessage('');
            
            // Move the following logic inside this function
            const name = response.data.length > 0 ? response.data[0].name : '';
            // const avatarUrl = "https://avatars.abstractapi.com/v1/?api_key=6c7f85c31f064e2e9836da10c47b919f&name=" + name;
            const avatarUrl = "https://avatars.abstractapi.com/v1/?api_key=klayani&name=" + name;
            setProfilePicUrl(avatarUrl);
          } catch (error) {
            setUsers([]);
            setErrorMessage('No user found.');
            console.log(errorMessage);
          }
    };

    useEffect(() => {
        fetchName("bhagya07");
   }, []);

    return (
        <div className='Fdashboard'>
            <div className='sidebar'>
                <div className='profile-area'>
                    <img className='profile-pic' src={profilePicUrl} alt="Profile Pic" />
                    <h2 className='profile-name'>
                    {users.length > 0 ? users[0].name : 'No user found'}
                    </h2>
                </div>
                <div className='menu'>
                    <ul className='item-list'>
                        <li className='item'><Link style={LinkStyle} to="/">Pending Requests</Link></li>
                        <li className='item'><Link style={LinkStyle} to="/">Approved Requests</Link></li>
                        <li className='item'><Link style={LinkStyle} to="/">Log out</Link></li>
                    </ul>
                </div>
            </div>
            <div className='dash-body'>
                <div className='head'>
                    <h1>Dashboard</h1>
                </div>
                <div className='inbox-button'>
                  
                </div>
            </div>

        </div>
    )
}

const LinkStyle = {
    color: 'white',
    textDecoration: 'none'
};

export default Fdashboard;
