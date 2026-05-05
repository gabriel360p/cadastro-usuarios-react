import react from "react";
import styled from "styled-components";
import UsersPNG from "../../assets/users.png";
import { IMGContainerStyle } from "./style.js";


function UsersImage() {
  return (
    <IMGContainerStyle>
      <img src={UsersPNG} alt="users-png" />
    </IMGContainerStyle>
  );
}

export default UsersImage;