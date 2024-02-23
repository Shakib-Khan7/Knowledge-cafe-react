import React from 'react';
import './MarkedBLogs.css'

const MarkedBlogs = (props) => {
    
    return (
        <div className='blog-bookmarked'>
            <p id='para'>{props.markedBlogs.blogTitle}</p>
            
        </div>
    );
};

export default MarkedBlogs;