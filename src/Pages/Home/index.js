//React Components and Hooks
import React, { useState, useEffect } from "react";
//Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Custom Components
import AlbumCard from "./AlbumCard";
import "./index.css";

const Homepage = () => {
  const [albumState, setAlbumState] = useState([]);
  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    let albums = API.getAlbums.then((albums) => {
      setAlbumState(albums);
    });
  }, []);

  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <Container>
      <Row>
        {dummyData.map((data) => (
          <Col md={3}>
            <AlbumCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
//mapping function that creates a row with every 3 cards
export default Homepage;
