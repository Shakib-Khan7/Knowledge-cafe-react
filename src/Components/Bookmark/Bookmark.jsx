import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    return (
        <div className='bookmark-container'>
            <h4>Bookmarked Blogs:{props.bookmarked.length}</h4>
        </div>
    );
};

export default Bookmark;