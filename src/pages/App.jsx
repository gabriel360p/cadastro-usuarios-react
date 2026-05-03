import { useState } from "react";
import {
  MainContainer,
  Title,
  Form,
  RowContainerInputs,
  Input,
  FormButton,
  UsersButton,
  IMGContainer,
} from "../styles/style.js";

import UsersPNG from "./assets/users.png";
import TrashSVG from "./assets/trash.svg";

function Home() {
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
            <Input type="text" id="name" placeholder="Nome" />
            <Input type="text" id="lastname" placeholder="Sobrenome" />
          </RowContainerInputs>
          <Input type="email" placeholder="Email" />
          <FormButton>Cadastrar</FormButton>
        <UsersButton type="button">Usuários</UsersButton>
        </Form>

      </MainContainer>
    </>
  );
}

export default Home;
