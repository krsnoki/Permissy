import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import '../styles/fdashboard.css'

function Fdashboard() {
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [userName, setUserName] = useState('');
 
    async function fetchName() {
      
        try {
            console.log('Fetching name...');
            const response = await fetch('http://localhost:5000/api/users/getUttp:localhost:5000/api/users/getUser', {"username": "bhagya07" });
            const data = await response.json();

            if (data.name) {
                setUserName(data.name);
                console.log(userName)
            } else {
                alert('No name found');
            }
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchName(); // Call the fetchName function to fetch the username

        // Set the profilePicUrl directly with the avatar URL
        const avatarUrl = "https://avatars.abstractapi.com/v1/?api_key=6c7f85c31f064e2e9836da10c47b919f&name="+ "Aashutosh Karale"; // Replace YOUR_API_KEY
        setProfilePicUrl(avatarUrl);
    }, []);

    return (
        <div className='Fdashboard'>
            <div className='sidebar'>
                <div className='profile-area'>
                    <img className='profile-pic' src={profilePicUrl} alt="Profile Pic" />
                    <h2 className='profile-name'>Aashutosh</h2>
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
                    <button className='pending'></button>
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
