import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

import Login from '../components/forms/Login';
import Register from '../components/forms/Login';
import LoginRegister from '../components/forms/Login';
import SkillDetail from '../components/Skills/SkillDetail';
import Modal from '../layouts/modal/Modal';
import { skills } from '../components/Skills/Skills';

const ModalManger = () => {
  const dispatch = useDispatch();
  const { isOpen, componentName, modalChildPosition, childrenProps, skillId } =
    useSelector((state) => state.modal);

  const closeModalHandler = () => dispatch(closeModal());


  const componentsLookUp = { Login, Register, LoginRegister, SkillDetail };
  let renderComponent;
  if (componentName) {
    const SelectedComponent = componentsLookUp[componentName];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent {...childrenProps} />;
    }
    
  } 
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>

    {componentName ? <Modal
      isOpen={isOpen}
      closeModalHandler={closeModalHandler}
      modalChildPosition={modalChildPosition}
    >
      {renderComponent}
    </Modal> : ''}
    
    
    </>
    
  );
};

export default ModalManger;
