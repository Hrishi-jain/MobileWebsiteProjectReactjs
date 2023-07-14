import React from 'react';
import Navbar from './navbar';

const Header = () => {
    return (
        <div id='main'>
            <Navbar />
            <div className='name'>

                <h1><span>Lanch Your App</span> with Confidence And Creativity</h1>
                <p className='details'>Hi everyone! This is created and designed by Hrishi Jain. For more enquiry contact me.</p>
                <a href='#' className='cv-btn'>Download</a>
            </div>

            <div class="imageSlider">

            </div>

        </div>
    );
}

export default Header;
