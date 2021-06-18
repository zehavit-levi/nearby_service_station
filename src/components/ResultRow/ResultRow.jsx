import React from 'react';
import './ResultRow.scss';
function ResultRow({ address, comments, activity_hours }) {
    return (
        <div className="row_container">
            <div>{comments}</div>
            <div>{address}</div>
            <div>{activity_hours}</div>
        </div>
    );
}

export default ResultRow;