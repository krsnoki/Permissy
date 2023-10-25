import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/inbox.css";
import { dummyList } from "../assets/lists/dummyApplications";

const Inbox = ({ status }) => {
  const [applications, setApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchApplications() {
      try {
        const response = await axios.get(`http://localhost:3000/requests/getApps?status=${status}`);
        setApplications(response.data);
        setErrorMessage('');
      } catch (error) {
        setApplications([]);
        setErrorMessage('No application found.');
        console.log(error.message);
      }
    }
    fetchApplications();
  }, [status]);

  return (
    <>
      {applications.map((item, index) => (
        <div className="application" key={index}>
          <div className="title">{item.body.subject}</div>
          <div className="details">
            <div className="date">{item.date}</div>
            <div className="stats">{item.status}</div>
          </div>
        </div>
      ))}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

Inbox.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Inbox;
