import styled from "styled-components";

export const IMGContainerStyle = styled.div`
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
