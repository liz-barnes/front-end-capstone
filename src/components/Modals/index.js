import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdAddCircleOutline } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import {
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import ModalIcons from './Constants';

const AppModal = (props) => {
  const {
    className, label, header,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const iconToRender = (type) => {
    switch (type) {
      case 'add':
        return <MdAddCircleOutline />;
      case 'edit':
        return <FiEdit />;

      default:
        return '';
    }
  };

  return (
    <div className='modal-container'>
      {console.warn('icon', ModalIcons.label)}
      {console.warn('label', label)}
      {label ? (
        { ...iconToRender(label) }
        // <FontAwesomeIcon icon={ModalIcons.label} className={className} fixedWidth={true} />
        // <Button className={buttonLabel === 'Add to Trip' ? 'add-to-trip-modal' : 'modal-btn'} color={props.btnColor} onClick={toggle}>
        //   <i className={`fas ${props.icon} fa-1x`}></i>
        //   {buttonLabel}
        // </Button>
      ) : <Link className={className} onClick={toggle}>{header}</Link>}
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </div>
  );
};

export default AppModal;
