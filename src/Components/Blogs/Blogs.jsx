import React from 'react';
import './BLogs.css'
import Bookmark from '../Bookmark/Bookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Blogs = (props) => {
    const { id, authorName, blogTitle, blogCoverImage, authorImage, readTime, publishedDate } = props.blogs;
    const handleBookMark = props.handleBookMark;
    return (

        <div className='blog-container'>
            <img src={blogCoverImage} alt="" />
            <div className='author-desc'>
                <div className='author'>
                    <img src={authorImage} alt="" />
                    <div>
                    <h6>{authorName}</h6>
                    <p><small><b>{publishedDate}</b></small></p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{readTime} min read</p>
                    <button onClick={()=>handleBookMark(props.blogs)}><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></button>

                </div>
            </div>
            <h3 style={{paddingTop:'10px',paddingBottom:'10px',fontWeight:'700'}} >{blogTitle}</h3>
            <button style={{color:'blue',border:'none',boxShadow:'none', textDecoration:'underline',marginBottom:'50px'}}><a>Mark as read</a></button>
            <hr />
        </div>




    );
};

export default Blogs;