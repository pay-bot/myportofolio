import { createSlice } from "@reduxjs/toolkit";
import { skills } from "../../components/Skills/Skills";

const initialState = {
  isOpen: false,
  componentName: null,
  modalChildPosition: null,
  childrenProps: {},
  skill: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload.name;
      state.modalChildPosition = action.payload.position || "center";
      state.childrenProps = action.payload.childrenProps;
      state.skill = skills.find((el) => el.id === action.payload.id);
    },
    closeModal: (state, action) => {
      state.isOpen = !state.isOpen;
      state.componentName = null;
      state.modalChildPosition = "center";
      state.childrenProps = {};
    },
    getSkill: (state, action) => {
      state.skill
    },
   
  },
});

export const { openModal,openModalChild, closeModal, getSkill } = modalSlice.actions;

export default modalSlice.reducer;
