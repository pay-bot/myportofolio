import React, { Fragment } from 'react';


const Modal = ({ children, isOpen, closeModalHandler, modalChildPosition }) => {
  return (
    <Fragment>
      <div
        onClick={closeModalHandler}
        className={`modal-backDrop ${isOpen ? 'modal-show' : 'modal-hide'}`}
      ></div>
      <div
        className={`modal-container ${isOpen ? 'modal-show' : 'modal-hide'}`}
      >
        <div className='modal-close'>
          <img
            src='close.svg'
            className='modal-close-img'
            alt='close-modal'
            onClick={closeModalHandler}
          />
        </div>
        <div className={`modal-content ${modalChildPosition}`}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
