import React from 'react'
import { FaDownload } from "react-icons/fa"

type Props = {
    p: string;
    link: string;
  }

  export default function Div  ({p, link} : Props)  {
  return (
    <div className=' text-white'>

            <div>

            <p className='m-4 text-center text-2xl'>
            {p} 
            </p>

        <div className=" flex justify-center items-center">
        <a href={link}
        className="md:m-4 text-[#0366fc] text-2xl cursor-pointer hover:text-4xl 
        hover:text-[#fc0303]">
        <FaDownload/>
        </a>
        </div>

        </div>
        </div>
  )
}
