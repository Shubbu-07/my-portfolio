import React from "react";
import "./Project.css";
import projectImage1 from "../../Assets/project-image.jpg";
import projectImage2 from "../../Assets/Netflix-logo.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Project() {
  return (
    <div className="container project-div">
      <div className="project-heading">
        <h1 className="text-center">Projects</h1>
      </div>

      <div className="project-cards my-5">
        <Card className="pjt-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={projectImage1} />
          <Card.Body>
            <Card.Title>IETE DIEMS ISF</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="card-button mx-5" variant="light">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="pjt-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={projectImage2} />
          <Card.Body>
            <Card.Title>Netflix - Clone</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="card-button mx-5" variant="light">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="pjt-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Personal Portfolio</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="card-button mx-5" variant="light">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
