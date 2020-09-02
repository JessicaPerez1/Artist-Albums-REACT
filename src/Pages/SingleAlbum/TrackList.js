import React from "react";
import Table from "react-bootstrap/Table";

const TrackList = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Track Name</th>
        </tr>
      </thead>
      <tbody>
        {props.tracks ? (
          props.tracks.map((track, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{track.name}</td>
              </tr>
            );
          })
        ) : (
          <div>Tracks not found</div>
        )}

        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default TrackList;
