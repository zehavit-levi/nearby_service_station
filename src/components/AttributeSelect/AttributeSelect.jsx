import './AttributeSelect.scss'

import React from 'react';

function AttributeSelect({ title, value, onChange }) {

    const handleChange = (e) =>{
        onChange(!value)
    }
    return (
        <div className="attributeSelect">
            <input type="checkBox" className="checkBox" onChange={handleChange} checked={value}>
            </input>
            <div>{title}</div>
        </div>
    );
}

export default AttributeSelect;