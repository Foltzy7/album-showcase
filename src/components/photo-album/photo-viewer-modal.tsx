import React from "react";
import { Button, Modal } from "react-bootstrap";

export interface PhotoViewerProps {
  show: boolean;
  alt: string;
  src: string;
  children: JSX.Element;
  setShow: Function;
}

export default function PhotoViewerModal(props: PhotoViewerProps) {
  const handleClose = () => props.setShow(false);

  return (
    <div id={props.alt}>
      <Modal show={props.show} onHide={handleClose} size={"lg"} centered>
        <Modal.Header closeButton>
          <Modal.Title>src: {props.src}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={"d-flex justify-content-center"}>
            {props.children}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
