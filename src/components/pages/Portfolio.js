// Portfolio section has six apps using project component
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import notesApp from '../../images/notesApp.png';
import marvelApp from '../../images/marvelousLove.png';
import weatherApp from '../../images/weatherForecast.png';
import teamApp from '../../images/teamProfiles.png';
import reviewApp from '../../images/review4u.png';
import dreamApp from '../../images/dreamApp.png';
import '../../App.css';

const projects = [
    {
        title: "Notes App",
        imgUrl: notesApp,
        url: "https://sheltered-cliffs-49983.herokuapp.com/"
    },
    {
        title: "MARVELous Love",
        imgUrl: marvelApp,
        url: "https://armaples.github.io/marvel-character-compatibility/"
    },
    {
        title: "Weather Application",
        imgUrl: weatherApp,
        url: "https://armaples.github.io/weather-forecast/"
    },
    {
        title: "Team Profile Generator",
        imgUrl: teamApp,
        url: "https://github.com/armaples/team-profile-generator"
    },
    {
        title: "Review4U",
        imgUrl: reviewApp,
        url: "https://music-review-4-u.herokuapp.com/login"
    },
    {
        title: "Dreamscape",
        imgUrl: dreamApp,
        url: "https://dreamscape-vision-board.herokuapp.com/visionboard"
    },
]

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
                <Row xs={1} sm={2} md={3}>
                    {projects.map((project) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={project.imgUrl} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Button className="custom-btn" style={{ background: "#8093F1", color: "#F7AEF8" }} href={project.url}>Deployed Application</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    ))}
                </Row>
        </div>
    )
}

export default Portfolio;