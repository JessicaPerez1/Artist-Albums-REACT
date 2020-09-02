import React from "react";
//bootstrap component

import Card from "react-bootstrap/Card";

const AlbumCard = ({ title, cover, artist }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{artist.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default AlbumCard;
