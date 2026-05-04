//Importação de hooks
import { useState } from "react";
import { useRef } from "react";//fazer/criar referências/capturar/pegar dados se baseando em uma referência que vamos informar

import {
  MainContainer,
  Title,
  Form,
  RowContainerInputs,
  Input,
  FormButton,
  UsersButton,
  IMGContainer,
} from "./style.js";

import UsersPNG from "../../assets/users.png";
import TrashSVG from "../../assets/trash.svg";

function Home() {
  // Podemos usar o useRef para capturar dados que não vão ser mostrados de imediatos para o usuário, pois quando esse valor é alterado,
  // ele não atualiza automaticamente na tela, quem faz isso é o useState, que pode até guardar valores pra usar depois. Eles tem usos diferentes
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  console.log(inputName.current.value)

  function registerNewUser() {
    // Aqui nessa função vamos mandar os dados para cadastrar os novos usuários, coletamos as informações usando o useRef e vamos mandar para o node.js que vai mandar para o MongoDB
    // console.log(inputName.current.value);

    //Capturando os dados dos inputs que a gente quer.
    inputAge;
    inputEmail;
    inputName;
  }

  return (
    <>
      <MainContainer>
        {/* Posso estilizar assim de forma individual ou posso estilizar no style */}
        {/* <p style={{color:'red', fontSize:30}}> */}

        <IMGContainer>
          <img src={UsersPNG} alt="users-png" />
        </IMGContainer>

        <Form>
          <Title>Cadastro de Usuário</Title>
          <RowContainerInputs>
            {/* Conectando o useRef, assim estou pegando TODOS os dados desse input  */}
            <Input type="text" placeholder="Nome" ref={inputName} />
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </RowContainerInputs>
          <Input type="email" placeholder="Email" ref={inputEmail} />
          <FormButton type="button" onClick={registerNewUser}>
            Cadastrar
          </FormButton>
          <UsersButton type="button">Usuários</UsersButton>
        </Form>
      </MainContainer>
    </>
  );
}

export default Home;
