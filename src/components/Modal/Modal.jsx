import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "./modal.css";
function MyVerticallyCenteredModal(props) {
  const fileSize = "/w500";

  const movie = { ...props.movie[0] };

  const imgUrl = "https://image.tmdb.org/t/p" + fileSize + movie.poster_path;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Información
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center ">
          <div className="d-flex justify-content-center ">
            <img alt={movie.original_title} src={imgUrl} />
          </div>
          <div>
            <h4 className="text-center"> {movie.original_title} </h4>
          </div>
          <div>
            <p>{movie.overview}</p>
          </div>
          <div>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
