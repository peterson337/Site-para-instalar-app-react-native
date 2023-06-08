import React from "react"
import { FaDownload } from "react-icons/fa"


export default function Home() {
  return (
    <main className=" ">

     <div className='md:p-10 p-7 bg-blue-950 text-center md:text-4xl text-3xl'> 
      <h1>Site para instalar apps do react native</h1>

     </div>

     <div>

      <p className='m-4 text-center text-2xl'>
        Aplicativo lista de tarefas: 
      </p>

      <div className=" flex justify-center items-center">
      <a href="https://expo.dev/artifacts/eas/kf7TVcLoXzge6kAHLVrPp7.apk"
      className="md:m-4 text-[#0366fc] text-2xl cursor-pointer hover:text-4xl 
      hover:text-[#fc0303]">
       <FaDownload/>
      </a>
      </div>

      </div>

    </main>
  )
}
