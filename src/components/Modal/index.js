import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';

const AppModal = (props) => {
  const { className, buttonLabel } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='modal-container'>
      <Button className={buttonLabel === 'Add to Trip' ? 'add-to-trip-modal' : 'modal-btn'} color={props.btnColor} onClick={toggle}>
        <i className={`fas ${props.icon} fa-1x`}></i>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{React.cloneElement(props.children, { toggle })}</ModalBody>
      </Modal>
    </div>
  );
};

export default AppModal;
