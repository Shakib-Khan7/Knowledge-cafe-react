import React, { useEffect, useState } from 'react';
import './Main.css'
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked,setBookmarked] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    const handleBookMark = (blog) =>{
        let newBookmark = [];
        newBookmark=[...bookmarked,blog]
        setBookmarked(newBookmark);
    }






    return (
        <div className='container all-container'>


            <div className='blog-container'>
            {
                blogs.map(blog => <Blogs key={blog.id}
                    blogs={blog}
                    handleBookMark={handleBookMark}

                ></Blogs>)
            }
            </div>
            <div className='bookmark'>
                <Bookmark bookmarked={bookmarked}></Bookmark>
            </div>






        </div>
    );
};

export default Main;