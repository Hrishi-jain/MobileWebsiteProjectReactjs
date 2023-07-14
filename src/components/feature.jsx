import React from 'react';
import FeatuerBox from './featuerBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

const Feature = () => {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatuerBox image={featureimage} title='Development course' />
                <FeatuerBox image={featureimage1} title='Saving Money' />
                <FeatuerBox image={featureimage2} title='Usable interface' />
            </div>
            
        </div>
    );
}

export default Feature;
