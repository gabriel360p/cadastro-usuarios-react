import react from "react";
import { useState } from "react";
import apiAxios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


//importando meus componentes styled
import { Container, MainTitle } from "./style.js";

//importando meu componente reutilizável
import DefaultButton from "../../components/DefaultButton";
import UsersImage from "../../components/UsersImage";

function ListUsers() {

  const navigate = useNavigate();

  return (
    <Container>
      <UsersImage />
      <MainTitle>Listagem de usuários</MainTitle>
      <DefaultButton
        type="button"
        variavelDoida="é isso mesmo, eu sou uma variável JS!"
      >
        Botão
      </DefaultButton>

      {/* Inserindo minha navegação */}
      <DefaultButton onClick={() => navigate("/")} tema="primario" type="button">
        Cadastrar Novo Usuário
      </DefaultButton>
    </Container>
  );
}

export default ListUsers;
