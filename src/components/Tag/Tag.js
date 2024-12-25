import React from 'react';
import './Tag.css';

function Tag({ text, type = 'default' }) {
    return <span className={`tag tag-${type}`}>{text}</span>;
}

export default Tag;
