//React Components and Hooks
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Custom Components
import { fetchAlbum } from "../../Utils/API";

const SingleAlbum = () => {
  let { id } = useParams();
  const [albumState, setAlbumState] = useState(null);
  useEffect(() => {
    let selectedAlbum = fetchAlbum(id);
    setAlbumState(selectedAlbum);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={6}>
          {albumState ? <h1>{albumState.title}</h1> : <div>No album</div>}
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};
//mapping function that creates a row with every 3 cards
export default SingleAlbum;
