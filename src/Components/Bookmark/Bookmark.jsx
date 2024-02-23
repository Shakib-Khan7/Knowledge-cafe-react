import React from 'react';
import './Bookmark.css'
import MarkedBlogs from '../MarkedBlogs/MarkedBlogs';

const Bookmark = (props) => {
    let addedBlogs =[]
    for(const blog of props.bookmarked){
        addedBlogs.push(blog)
        
        
        
    }
    let timeSpent = 0;
    for(const time of props.timeSpent){
        timeSpent = timeSpent + time.readTime
    }
    
   

    return (
        <div className='bookmark-container'>
            <div className='time'>
                <h4>Spent time on read:{timeSpent}</h4>
            </div>

            <h4 style={{fontWeight:'700',fontFamily:'arial'}}>Bookmarked Blogs:{props.bookmarked.length}</h4>
             <div>
                {
                    addedBlogs.map(ab=><MarkedBlogs key={ab.id}
                        markedBlogs={ab}
                    
                    ></MarkedBlogs>)
                }
             </div>

        </div>
    );
};

export default Bookmark;