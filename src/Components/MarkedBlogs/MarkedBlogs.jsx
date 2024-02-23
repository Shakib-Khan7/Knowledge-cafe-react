import React from 'react';
import './MarkedBLogs.css'

const MarkedBlogs = (props) => {
    console.log(props.markedBlogs)
    return (
        <div>
            <p>{props.markedBlogs.blogTitle}</p>
            
        </div>
    );
};

export default MarkedBlogs;