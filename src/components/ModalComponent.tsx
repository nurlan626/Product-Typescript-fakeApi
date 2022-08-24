import React from 'react'
import { Button, Modal } from 'react-bootstrap';

interface ModalProps {
    showModal: boolean,
    setShowModal: any,
    children: React.ReactNode
}
const ModalComponent = ({showModal, setShowModal, children }: ModalProps) => {

  return (
    <>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default ModalComponent