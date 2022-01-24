import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

import Login from '../components/forms/Login';
import Register from '../components/forms/Login';
import LoginRegister from '../components/forms/Login';
import Modal from '../layouts/modal/Modal';

const ModalManger = () => {
  const dispatch = useDispatch();
  const { isOpen, componentName, modalChildPosition, childrenProps } =
    useSelector((state) => state.modal);

  const closeModalHandler = () => dispatch(closeModal());

  const componentsLookUp = { Login, Register, LoginRegister };
  let renderComponent;
  if (componentName) {
    const SelectedComponent = componentsLookUp[componentName];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent {...childrenProps} />;
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModalHandler={closeModalHandler}
      modalChildPosition={modalChildPosition}
    >
      {renderComponent}
    </Modal>
  );
};

export default ModalManger;
