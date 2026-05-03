import styled from "styled-components";

//ele é um componente, por isso inicia com letra maiúscula, inclusive podemos exportar para usar
export const MainContainer = styled.div`
  //   /* Estou DIZENDO que o componentE MainContainer é uma DIV e depois estou estilizando esse component */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #181f36;
  /* ele cria um espaço entre os elementos, parecido com o gap */
  /* justify-content: space-evenly; */
  align-items: center;
  /* align-content: center; */
`;

export const Title = styled.h1`
  font-size: 3vw;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  gap: 20px;
  padding: 10px;
`;

export const RowContainerInputs = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;

  Input {
    width: 50vw;
    max-width: 310px;
  }
`;

export const Input = styled.input`
  padding: 12px 20px;
  border-radius: 15px;
  width: 50vw;
  max-width: 635px;
`;

export const FormButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: white;
  background: linear-gradient(to right, #fe7e5d, #7f3841);

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
export const UsersButton = styled.button`
  border: none;
  color: white;
  width: 100px;
  background: linear-gradient(to right, #fe7e5d, #7f3841);

  height: 30px;
  border-radius: 15px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const IMGContainer = styled.div`
  margin-top: 30px;
  width: 90vw;
  height: 40vh;

  //limite de quando ele pode crescer, dá pra fazer sites parcialmente responsivos com isso
  max-width: 900px;

  background: linear-gradient(to right, #fe7e5d, #7f3841);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
