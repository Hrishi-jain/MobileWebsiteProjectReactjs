import React from 'react';

const FeatuerBox = (props) => {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p> Hi everyone Hrishi jain here for you  </p>

            </div>
        </div>
    );
}

export default FeatuerBox;
