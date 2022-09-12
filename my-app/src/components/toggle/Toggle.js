import React, { useState } from 'react';
import "./style.css"
const Toggle = () => {
    const [on, setOn] = useState(false);
    function handleToggle() {
        setOn((on) => !on)
    }
    // console.log(on, setOn);
    return (
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
            <div className={`spinner ${on ? "active" : ""}`}></div>
        </div>
    );
};

export default Toggle;