import react from "react";
import PropTypes from "prop-types";

//nome do componente styled
import { DefaultButtonStyle } from "./style.js";


//validando proptypes para garantir que o componente receba as informações corretas
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  variavelDoida: PropTypes.string,
};

function DefaultButton({ children,tema, ...resto }) {
  //spreads operator, eu peguei o children e o resto das informações do meu botão, joga dentro de props.

  console.log(children, resto.type, resto.onClick);

  return (
    
    <DefaultButtonStyle tema={tema} type={resto.type} onClick={resto.onClick}>
      {/* Consigo acessar as props do botão, como por exemplo qualquer variável! como uma propriedade tipo HTML padrão */}
      {children}
    </DefaultButtonStyle>
  );
}

export default DefaultButton;
