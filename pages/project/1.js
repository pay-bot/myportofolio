import React from 'react'
import Category from '../../components/Project/Category'
import { getProjectByCategory } from "../../utils/api"

export default function react({ initialCategory }) {
  return (
    <>
      <div className=" w-9/12 w-11/12 mx-auto  lg:px-5 px-0 mb-10 ">
        <Category />
      {initialCategory.project.map((data, key) => (
        <p className="">{data.title}</p>
          ))}
          <p>test</p>
      </div>

    </>
  )
}

export async function getServerSideProps(ctx) {
  const [initialCategory] = await Promise.all([getProjectByCategory(ctx.params)])

  return { props: { initialCategory} };
}