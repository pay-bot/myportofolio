import { createSlice } from '@reduxjs/toolkit';
import { skills } from '../../components/Skills/Skills';

const initialState = {
  isOpen: false,
  componentName: null,
  modalChildPosition: null,
  childrenProps: {},
  skill : '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload.name;
      state.modalChildPosition = action.payload.position || 'center';
      state.childrenProps = action.payload.childrenProps;
      state.skill = skills.find((el) => el.id === action.payload.id);
    console.log('ini', state.skill)
    

    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.componentName = null;
      state.modalChildPosition = 'center';
      state.childrenProps = {};
    },
    getStudent : (state, action) => {
    return state.skill.payload;
  },
  },
});

export const { openModal, closeModal, getSkill } = modalSlice.actions;

export default modalSlice.reducer;
