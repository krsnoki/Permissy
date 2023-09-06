import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import DropdownButton from '../components/DropdownButton';
import Inbox from '../components/inbox';
import '../styles/fdashboard.css'
import '../styles/sdashboard.css'
import { directorOfcOptions, siteSectionOptions, deanOfcOptions, deptOptions } from '../assets/lists/itemLists';
// import { dummyList } from '../assets/lists/dummyApplications';

function Fdashboard() {
    const location = useLocation();
    const payload = location.state && location.state.payload;

    const [status, setStatus] = useState('pending'); // ['pending', 'approved', 'rejected'
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchName = async (username) => {
        try {
            const response = await axios.get(`http://localhost:3000/findUser?username=${username}`);
            setUsers(response.data);
            setErrorMessage('');

            // Move the following logic inside this function
            const name = response.data.length > 0 ? response.data[0].name : '';
            console.log(name);
            const avatarUrl = "https://avatars.abstractapi.com/v1/?api_key=6c7f85c31f064e2e9836da10c47b919f&name=" + name;
            // const avatarUrl = "https://avatars.abstractapi.com/df1/?api_key=klayani&name=" + name;
            setProfilePicUrl(avatarUrl);
        } catch (error) {
            setUsers([]);
            setErrorMessage('No user found.');
            console.log(errorMessage);
        }
    };

    useEffect(() => {
        fetchName(location.username);
        console.log("ae bhaii: "+ location.username)
    }, [location]);

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
                        <li className='item'><Link style={LinkStyle} to="/">Apply</Link></li>
                        <li className='item'><Link style={LinkStyle} to="/">Pending Requests</Link></li>
                        <li className='item'><Link style={LinkStyle} to="/">Approved Requests</Link></li>
                        <li className='item'><Link style={LinkStyle} to="/">Log out</Link></li>
                    </ul>
                </div>
            </div>

            {/* Dashboard main body */}
            <div className='dash-body'>
                <div className='head'>
                    <h1>Dashboard</h1>
                
                <div className='application-opt'>
                    <ul className='opt-item'>
                        <li><DropdownButton items={directorOfcOptions} btnLabel={"Director Office"} /></li>
                        <li><Link style={LinkOp}>Hostel Office</Link></li>
                        <li><DropdownButton items={siteSectionOptions} btnLabel={"Site Section"} /></li>
                        <li><DropdownButton items={deanOfcOptions} btnLabel={"Dean Office"} /></li>
                        <li><DropdownButton items={deptOptions} btnLabel={"Department"} /></li>
                    </ul>
                </div>
            </div>
                <div>
                    <button onClick={() =>setStatus('approved')}> Approved</button>
                    <button onClick={() =>setStatus('pending')}> Pending</button>
                    <button onClick={() =>setStatus('rejected')}> rejected</button>

                </div>
                <div className='inbox-container'>
                    <Inbox status={status} />
                </div>
            </div>

        </div>
    )
}

const LinkStyle = {
    color: 'white',
    textDecoration: 'none'
};

const LinkOp = {
    color: 'black',
    textDecoration: 'none'
}
export default Fdashboard;
