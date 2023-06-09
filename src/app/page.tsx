import React from "react"
import Div from "./div";

type Props = {
  p: string;
  link: string;
}

export default function Home({p, link} : Props) {
  return (
    <main>
      <title>web app para instalar apps do react native</title>

     <div className='md:p-10 p-7 bg-blue-950 text-center md:text-4xl text-3xl'> 
      <h1>web app para instalar apps do react native</h1>

     </div>

          <Div
       p=" App lista de tarefas: " 
       link="https://expo.dev/artifacts/eas/kf7TVcLoXzge6kAHLVrPp7.apk" 
        />

      <Div
       p="App de anotação:" 
       link="https://expo.dev/artifacts/eas/sdhot2gPAfZXWVmzAco3nW.apk" 
        />


      {/* 
      
      */}

    </main>
  )
}
