import React, { Fragment } from 'react';


const DirectModal = ({closeModalHandler, children}) => {
  return (
    <Fragment>
      <div
        onClick={closeModalHandler}
        className={`modal-backDrop modal-show transform transition-all duration-150 ease-out`}
      ></div>
      <div
        className={`modal-container modal-show transform transition-all duration-150 ease-out`}
      >
        <div className='modal-close'>
          <img
            src='close.svg'
            className='modal-close-img'
            alt='close-modal'
            onClick={closeModalHandler}
          />
        </div>
        <div className={`modal-content `}>{children}</div>
      </div>
    </Fragment>
  );
};

export default DirectModal;
