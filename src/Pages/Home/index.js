//React Components and Hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Custom Components
import AlbumCard from "./AlbumCard";
import "./index.css";
//API
import fetchData from "../../Utils/API";

const Homepage = () => {
  const [albumState, setAlbumState] = useState([]);
  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    let albums = fetchData();
    setAlbumState(albums);
  }, []);

  return (
    <Container>
      <Row>
        {albumState.length ? (
          albumState.map((data) => (
            <Col key={data.id} md={3}>
              <Link to={`/albums/${data.id}`}>
                <AlbumCard
                  title={data.title}
                  cover={data.cover}
                  artist={data.artist}
                />
              </Link>
            </Col>
          ))
        ) : (
          <div />
        )}
      </Row>
    </Container>
  );
};
//mapping function that creates a row with every 3 cards
export default Homepage;
