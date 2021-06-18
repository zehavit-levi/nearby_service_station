import React from 'react';
import './ResultRow.scss';
function ResultRow({ address, comments, activity_hours }) {
    return (
        <div className="row_container">
            <div>{address}</div>
            <div>{comments}</div>
            <div>{activity_hours}</div>
        </div>
    );
}

export default ResultRow;