import react, { use } from "react";
import { useState } from "react";
import apiAxios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../services/api.js";
import { useEffect } from "react";

//importando meu icon de lixeira
import Trash from "../../assets/trash.svg";

//importando meus componentes styled
import { Container, MainTitle, TrashIcon, ContainerCard } from "./style.js";

//importando meu componente reutilizável
import DefaultButton from "../../components/DefaultButton";
import UsersImage from "../../components/UsersImage";
import { func } from "prop-types";

function ListUsers() {
  //Aqui estou manipulando uma variável do "tipo" state
  const [users, setUsers] = useState([]); //aqui estou mandando uma array vazia, pq é isso que ela é, uma array de duas posições que recebe uma variável e uma função
  //entenda assim: users é minha caixa com as informações, e o setUsers é como eu atualizo essa caixa

  async function deleteUser(id) {
    await axiosApi.delete(`/users/${id}`);

    //Aqui estou atualizando a minha array, estou capturando apenas os usuários que tem ids daqueles usuários que foram apagados!
    setUsers(users.filter((user)=> user.id !== id));
  }


  useEffect(() => {
    //useEffect não aceita asyinc de cara, então temos que fazer assim:
    async function getUsers() {
      //puxando meus dados do meu back-end
      const { data } = await axiosApi.get("/users/list");
      //esse conceito se chama destruturização, onde a gente pega o que tá dentro do objeto e joga direto numa variável, sem precisar escrever data.data, muito legal!

      //setUsers é a função que atualiza minha variável users do tipo state, é assim que eu atualizo minha caixa
      setUsers(data);
    }
    getUsers();
  }, []); //Nessa array no final, a gente define ao useEffect quando ele deve ser recarregado, sosbre qual variável ele deve ficar de olho/observar

  const navigate = useNavigate();

  return (
    <Container>
      <UsersImage />
      <MainTitle>Listagem de usuários</MainTitle>

      {/* <DefaultButton
        type="button"
        variavelDoida="é isso mesmo, eu sou uma variável JS!"
      >
        Botão
      </DefaultButton> */}

      {/* Não retorna nada, então nada é mostrado na tela, por isso não usamos foreach para imprimir informações na tela */}
      {/* {users.forEach((element) => {
        <div>
          <p>{element.name}</p>
          <p>{element.email}</p>
          <p>{element.age}</p>
        </div>;
      })} */}

      {/* Usamos MAP pq ele RETORNA alguma coisa, enquanto foreach não retorna nada */}
      {/* key interator, ele é importante para o react identificar cada
        elemento da lista, e evitar problemas de performance, ele tem que
        ser único, por isso usamos o id do usuário */}

      {users.map((user) => (
        <ContainerCard key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.age}</p>

          <TrashIcon src={Trash} onClick={() => deleteUser(user.id)} alt="Lixeira" />
        </ContainerCard>
      ))}

      {/* Inserindo minha navegação */}
      <DefaultButton
        onClick={() => navigate("/")}
        tema="secundario"
        type="button"
      >
       Voltar
      </DefaultButton>
    </Container>
  );
}

export default ListUsers;
