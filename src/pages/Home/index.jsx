//Importação de hooks
import { useState } from "react";
import { useRef } from "react"; //fazer/criar referências/capturar/pegar dados se baseando em uma referência que vamos informar

//Importando o navigate, para navegar entras páginas
import { useNavigate } from "react-router-dom";

//Importando o AXIOS
import apiAxios from "../../services/api.js";

import {
  MainContainer,
  Title,
  Form,
  RowContainerInputs,
  Input,
  FormButton,
  UsersButton,
} from "./style.js";

//meu botão componente
import DefaultButton from "../../components/DefaultButton";
import UsersImage from "../../components/UsersImage";

import UsersPNG from "../../assets/users.png";
import TrashSVG from "../../assets/trash.svg";

function Home() {
  // Podemos usar o useRef para capturar dados que não vão ser mostrados de imediatos para o usuário, pois quando esse valor é alterado,
  // ele não atualiza automaticamente na tela, quem faz isso é o useState, que pode até guardar valores pra usar depois. Eles tem usos diferentes
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    // Aqui nessa função vamos mandar os dados para cadastrar os novos usuários, coletamos as informações usando o useRef e vamos mandar para o node.js que vai mandar para o MongoDB
    // console.log(inputName.current.value);

    //Capturando os dados dos inputs que a gente quer.
    const email = inputEmail.current.value;
    const age = Number(inputAge.current.value);
    const name = inputName.current.value;

    try {
      const resposta = await apiAxios.post("/users/create", {
        email: email,
        age: age,
        name: name,
      });
      console.log(resposta);
    } catch (error) {
      console.log(error);
    }
  }

  //iniciando a variável do Hook de navegação
  const navigate = useNavigate();

  return (
    <>
      <MainContainer>
        {/* Posso estilizar assim de forma individual ou posso estilizar no style */}
        {/* <p style={{color:'red', fontSize:30}}> */}

        <UsersImage />

        <Form>
          <Title>Cadastro de Usuário</Title>
          <RowContainerInputs>
            {/* Conectando o useRef, assim estou pegando TODOS os dados desse input  */}
            <Input type="text" placeholder="Nome" ref={inputName} />
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </RowContainerInputs>
          <Input type="email" placeholder="Email" ref={inputEmail} />
          <DefaultButton
            tema="primario"
            type="button"
            onClick={registerNewUser}
          >
            Cadastrar

          </DefaultButton>
          <DefaultButton
          // {/* Inserindo a navegação: */}
            onClick={() => navigate("/users/list")}
            // Sim é uma função chamando uma função

            tema="secundario"
            type="button"
          >
            Usuários
          </DefaultButton>
        </Form>
      </MainContainer>
    </>
  );
}

export default Home;
