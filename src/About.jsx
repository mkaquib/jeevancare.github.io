import React from 'react'
import Common from './Common'
import about_img from '../src/image/about_img.jpg';
export default function About() {
    return (
        <>
       <Common
        name="Coming Soon About Us Page"
        imgSrc={about_img}
        visit="/about"
        btnname="Get Started"
         />
            
        </>
    )
}
