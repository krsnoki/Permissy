import  { useState } from "react";

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("faculty");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

        return (
            <div>
                <h2>Select your role:</h2>
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="faculty">Faculty</option>
                    <option value="student">Student</option>
                </select>
                <p>You selected: {selectedOption}</p>
            </div>
        )
}

    export default Dropdown;
