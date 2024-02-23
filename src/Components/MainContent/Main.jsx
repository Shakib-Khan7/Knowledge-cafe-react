import React, { useEffect, useState } from 'react';
import './Main.css'
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([])
    const [timeSpent, setTimeSpent] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    const handleBookMark = (blog) => {
        let newBookmark = [];
        const exists = bookmarked.find(name=>name.id === blog.id )
        if(!exists){
            newBookmark = [...bookmarked, blog]

        }
        else{
            const remaining = bookmarked.filter(name=>name.id !==blog.id);
            newBookmark = [...remaining,exists]
            toast.error("This didn't work.")
        }
        
        setBookmarked(newBookmark);
        console.log(newBookmark)
    }
    const handleTime = (blog) => {
        let timeSpentBlogs = []
        timeSpentBlogs = [...timeSpent, blog]
        setTimeSpent(timeSpentBlogs)
        console.log('added', blog)

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