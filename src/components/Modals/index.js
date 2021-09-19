import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';

const AppModal = (props) => {
  const { className, buttonLabel, header } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='modal-container'>
      {buttonLabel ? (
        <Button className={buttonLabel === 'Add to Trip' ? 'add-to-trip-modal' : 'modal-btn'} color={props.btnColor} onClick={toggle}>
          <i className={`fas ${props.icon} fa-1x`}></i>
          {buttonLabel}
        </Button>
      ) : <Link className={className} onClick={toggle}>{header}</Link>}
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </div>
  );
};

export default AppModal;
