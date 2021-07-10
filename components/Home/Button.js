import React from 'react'
import Link from "next/link"
import { RESUME } from "./resume"


export default function Button() {
  return (
    <div className="flex md:justify-start justify-center">
      <button className="bg-blue-500 px-4 py-2 mr-3 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600"><Link href="/contact"><a >Contact</a></Link></button>
      <button className="bg-blue-100 px-4 py-2 text-lg font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  ><a href={RESUME}>Download CV</a></button>
    </div>
  )
}