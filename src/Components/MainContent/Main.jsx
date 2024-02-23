import React, { useEffect, useState } from 'react';
import './Main.css'
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked,setBookmarked] = useState([])
    const [timeSpent,setTimeSpent] = useState([])

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
    const handleTime = (blog) =>{
        let timeSpentBlogs = []
        timeSpentBlogs = [...timeSpent,blog]
        setTimeSpent(timeSpentBlogs)
        console.log('added',blog)

    }






    return (
        <div className='container all-container'>


            <div className='blog-container'>
            {
                blogs.map(blog => <Blogs key={blog.id}
                    blogs={blog}
                    handleBookMark={handleBookMark}
                    handleTime={handleTime}

                ></Blogs>)
            }
            </div>
            <div className='bookmark'>
                <Bookmark timeSpent={timeSpent} bookmarked={bookmarked}></Bookmark>
            </div>






        </div>
    );
};

export default Main;