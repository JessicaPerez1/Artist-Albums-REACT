import React from "react";
//bootstrap component
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AlbumCard from "./AlbumCard";
import Col from "react-bootstrap/Col";

import "./index.css";
const Homepage = (props) => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
        <Col md={3}>
          <AlbumCard />
        </Col>
      </Row>
    </Container>
  );
};
export default Homepage;
