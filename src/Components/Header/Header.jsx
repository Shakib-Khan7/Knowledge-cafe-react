import React from 'react';
import './Header.css'
import image from '../../images/profile.png'

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <h2>Knowldege Cafe</h2>
                <img src={image} alt="" />
            </div>
            <hr style={{ height: '1px', backgroundColor: 'gray' }} />

        </div>


    );
};

export default Header;