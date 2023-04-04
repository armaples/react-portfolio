// About me section has recent photo/avatar with short bio
import React from 'react';
import photo from '../../images/photo.jpeg';

function About() {
    return (
        <div>
            <img src={photo} alt="description" style={{ width: "300px"}}/>
            <h1>About Me</h1>
            <p>Alyssa is a recent student of the UNCC Full-Stack Coding Bootcamp.</p>
        </div>
    )
}

export default About;