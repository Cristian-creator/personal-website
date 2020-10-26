import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

import './VerticallyModal.css';

export default function VerticallyModal(props) {
    const { demo, sourceCode, title } = props;
    return (
        <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="vert-modal"
        // dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="its-body">
            <div className="demo">
                <img src={demo} alt="" srcset=""/>
            </div>
            <div className="info">
                <h1> { title } </h1>
                <a href={sourceCode}><button> Source Code </button> </a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}
