// Resume section needs link to downloadable resume and list of developer's proficiencies
import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
    return (
        <div>
        <h1>Proficiencies</h1>
        <p style={{ textAlign: "center" }}>HTML/CSS, JavaScript, Express, MySQL, MongoDB, React</p>
        <Button style={{ background: "#8093F1" }} href="https://drive.google.com/file/d/1TtJ-vfe9YNuZRYxKSY1wry-zLQDdhMRE/view?usp=sharing">Download Resume</Button>
    </div>
    )
}

export default Resume;