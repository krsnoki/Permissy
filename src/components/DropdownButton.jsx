import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DropdownButton.css"; // Import the CSS for styling

const DropdownButton = ({ items, btnLabel }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dropdown-button" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button className="dropdown-button-toggle">
        <span>{btnLabel}</span>
      </button>
      {showDropdown && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li className={`li ${showDropdown === 'true' ? 'active':''}`} key={index}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
