import React from 'react';

import home_img from '../src/image/hospital_home.jpg';
import Common from './Common'

export default function Home() {
    return (
        <>

       <Common
        name="A Destination for Advancedcare Care"
        imgSrc={home_img}
        visit="/service"
        btnname="Get Started"
         />
        
            
        </>
    )
}
