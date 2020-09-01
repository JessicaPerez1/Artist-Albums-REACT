import React from "react";
//bootstrap component
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AlbumCard from "./AlbumCard";

const Homepage = (props) => {
  return (
    <Container>
      <Row>
        <AlbumCard />
      </Row>
    </Container>
  );
};
export default Homepage;
