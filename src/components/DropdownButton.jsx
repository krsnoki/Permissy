
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "../styles/DropdownButton.css"; // Import the CSS for styling

// // const DropdownButton = ({ items, btnLabel }) => {
// //   const [showDropdown, setShowDropdown] = useState(false);

// //   const toggleDropdown = () => {
// //     setShowDropdown(!showDropdown);
// //   };

// //   return (
// //     <div className="dropdown-button" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
// //       <button className="dropdown-button-toggle">
// //         <span>{btnLabel}</span>
// //       </button>
// //       {showDropdown && (
// //         <ul className="dropdown-list">
// //           {items.map((item, index, children) => (
// //             <li className={`li ${showDropdown === 'true' ? 'active':''}`} key={index}>
// //               <Link to={item.to}>{item.label}</Link>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default DropdownButton;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types"; // Import PropTypes correctly

// import "../styles/DropdownButton.css";

// const DropdownButton = ({ items, btnLabel }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showChildren, setShowChildren] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const toggleChildren = () => {
//     setShowChildren(!showChildren);
//   };

//   return (
//     <div
//       className="dropdown-button"
//       onMouseEnter={toggleDropdown}
//       onMouseLeave={toggleDropdown}
//     >
//       <button className="dropdown-button-toggle">
//         <span>{btnLabel}</span>
//       </button>
//       {showDropdown && (
//         <ul className="dropdown-list">
//           {items.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.to}
//                 onMouseEnter={toggleChildren}
//                 // onMouseLeave={toggleChildren}
//               >
//                 {item.label}
//               </Link>
//               {item.children && showChildren && ( // Check if showChildren is true
//                 <ul className="dropdown-list">
//                   {item.children.map((child, childIndex) => (
//                     <li key={childIndex}>
//                       <Link to={child.to}>{child.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// DropdownButton.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       to: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       children: PropTypes.arrayOf(
//         PropTypes.shape({
//           to: PropTypes.string.isRequired,
//           label: PropTypes.string.isRequired,
//         })
//       ),
//     })
//   ).isRequired,
//   btnLabel: PropTypes.string.isRequired,
// };

// export default DropdownButton;

import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/DropdownButton.css";

const DropdownButton = ({ items, btnLabel }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleChildren = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div
      className="dropdown-button"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <button className="dropdown-button-toggle">
        <span>{btnLabel}</span>
      </button>
      {showDropdown && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => toggleChildren(index)}
              onMouseLeave={() => toggleChildren(index)}
            >
              <Link to={item.to}>{item.label}</Link>
              {item.children && index === activeIndex && (
                <ul className="dropdown-list-child">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link to={child.to}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          to: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  btnLabel: PropTypes.string.isRequired,
};

export default DropdownButton;