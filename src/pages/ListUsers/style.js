import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #181f36;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  height: 100%;
  color: white;
  padding-bottom: 15px;
`;

export const MainTitle = styled.h1`
  padding: 10px;
  font-size: 30px;
`;
export const TrashIcon = styled.img`
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:active{
    opacity: 0.5;
  }

`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #2b3856;
  width: 70vw;
  border-radius: 15px;
  height: 12vh;
  border: solid 1px white;
  max-width: 500px;
  margin-bottom: 10px;
`;
