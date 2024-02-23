import React from 'react';
import './MarkedBLogs.css'

const MarkedBlogs = (props) => {
    console.log(props.markedBlogs)
    return (
        <div className='blog-bookmarked'>
            <p id='para'>{props.markedBlogs.blogTitle}</p>
            
        </div>
    );
};

export default MarkedBlogs;