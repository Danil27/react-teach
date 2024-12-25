import React from 'react';
import './Checkbox.css';

function Checkbox({ label, checked, onChange }) {
    return (
        <label className="checkbox-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="checkmark"></span>
            {label && <span className="label">{label}</span>}
        </label>
    );
}

export default Checkbox;
