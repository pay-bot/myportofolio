import React,{useEffect} from 'react';
import { skills } from './Skills';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import   getSkill from '../../features/modal/modalSlice';
import   {openModal} from '../../features/modal/modalSlice';
import Modal from '../../layouts/modal/Modal';

export default function SkillDetail(skillId) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getSkill)
  }, [])
  const data = useSelector((state) => state.modal.skill)
 console.log('ini', data)
  return (
      <div>{data.id}</div>
  )

}
