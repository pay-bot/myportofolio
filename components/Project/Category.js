import React from 'react'
import CategoryItem from './CategoryItem'

export default function Category() {
  return (
    <>
    <ul className="lg:w-8/12 w-11/12 mx-auto flex justify-between">
        <CategoryItem href="/project/home">
          <span className="py-1 md:block hidden">ALL</span> 
          <span className="flex justify-center"><img src="/home.svg" alt="" className="w-8 h-8 my-1 md:hidden block" /></span>
          </CategoryItem>
        <CategoryItem href="/project/react"><span className="py-1 md:block hidden">REACT</span> 
          <span className="flex justify-center"><img src="/react-2.svg" alt="" className="w-8 h-8 my-1 md:hidden block" /></span></CategoryItem>
        <CategoryItem href="/project/laravel"><span className="py-1 md:block hidden">LARAVEL</span> 
          <span className="flex justify-center"><img src="/laravel.svg" alt="" className="w-8 h-8 my-1 md:hidden block" /></span></CategoryItem>
        <CategoryItem href="/project/vue"><span className="py-1 md:block hidden">VUE</span> 
          <span className="flex justify-center"><img src="/vue.svg" alt="" className="w-8 h-8 my-1 md:hidden block" /></span></CategoryItem>
    </ul>
    </>
  )
}
