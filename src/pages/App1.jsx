import { useState } from "react";

function App() {
  // Aqui antes do return eu posso criar qualquer código js e colocar diretamente no "html/"componente

  const paragraph =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut similique explicabo quisquam! Saepe numquam similique maxime laborum tempore blanditiis, eligendi quasi dolore dolor aliquid, iusto eius ex animi alias explicabo?";

  return (
    /*
      Importante: Na criação de um componente SEMPRE após o return, o componente precisa esta wrapper/envolto/abraçado por uma
      tag que será a tag "pai", se não vai dá erro, ele sempre precisa de um container que abraço tudo.
      Vc pode usar os <></> -> fragments ou usar uma tag normal
    */
    <>
      <h1>Olá Mundo</h1>
      {/* inserindo uma variável js no código html sem dificuldades! */}
      <p>{paragraph}</p>
    </>
  );
}

//se eu tivesse dois componentes aqui dentro, eu posso exportar os dois, só que eu preciso dá um export em cada um deles
export function App2() {
  // Aqui eu posso criar qualquer código js e colocar diretamente no "html/"componente

  return (
    <>
      <h1>Olá Mundo</h1>
    </>
  );
}

//exportando meu componente, deixando ele visível para ser importado
export default App; //primeiro jeito, eu exporto um só


// ESTOU GUARDANDO ESSE ARQUIVO POIS FIZ ANOTAÇÕES IMPORTANTES NELE, E EU NÃO QUERO MEXER/APAGAR