import React,{useEffect} from 'react';
import { skills } from './Skills';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  getStudent  from '../../features/modal/modalSlice';

export default function SkillDetail(state) {
  const dispatch = useDispatch();
 const data = getStudent
 console.log('ini', data)
  return <div>y</div>;
}
