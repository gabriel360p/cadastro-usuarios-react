import styled from "styled-components";

export const DefaultButtonStyle = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: white;
  //capturando os valores de propriedade do meu componente e alterando o tema do meu botão! Incrivel!!
  background:   ${(props) => props.tema === 'primario' ? 'linear-gradient(to right, #fe7e5d, #7f3841)' : 'transparent' };

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
