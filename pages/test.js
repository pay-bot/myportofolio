import React from 'react';
import useLocalStorageState from 'use-local-storage-state'
import Link from "next/link"


export default function Todos() {
  const [toggle, setToggle] = useLocalStorageState(false)

  function onClick() {
    setToggle(true)
}
  return (
    <div>
        {!toggle ? (
      <Link href="/test"><a>
        <button  onClick={onClick
        }>
          
          <p className="">belom like</p> 

        </button>
        </a></Link>
        ) 
        : 
        (  <p className="">sudah like</p> )}
        </div>
  );
};

