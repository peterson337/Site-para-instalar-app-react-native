import React from "react"
import Div from "./div";

export default function Home() {
  return (
    <main>
      <title>web app para instalar apps do react native</title>

     <div className='md:p-10 p-7 bg-blue-950 text-center md:text-4xl text-3xl'> 
      <h1>web app para instalar apps do react native</h1>

     </div>

          <Div
       p=" App lista de tarefas:" 
       link="https://expo.dev/artifacts/eas/kf7TVcLoXzge6kAHLVrPp7.apk" 
        />

      <Div
       p="App de anotação:" 
       link="https://expo.dev/artifacts/eas/sdhot2gPAfZXWVmzAco3nW.apk" 
        />

      <Div
       p="Calculadora:" 
       link="https://expo.dev/artifacts/eas/43MtjEAHmcs1dk9frgGeYt.apk " 
        />

        <Div
       p="Galeria de fotos:" 
       link="https://expo.dev/artifacts/eas/bAN1RzKWzRQ1a23ytdQkDp.apk" 
        />

        <Div
       p="App portfólio:" 
       link="https://expo.dev/artifacts/eas/pVBrucEi3rJdd9FWPdv66T.apk" 
        />

      <Div
       p="Nerd news, app de notícias para nerds:" 
       link="https://expo.dev/artifacts/eas/ruzMdjAapAGbHEdMXMqvxW.apk" 
        />


    </main>
  )
}
