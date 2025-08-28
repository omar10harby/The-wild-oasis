import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import DarkLogo from '../data/img/logo-dark.png'
import LightLogo from '../data/img/logo-light.png'

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const {isDarkMode}=useDarkMode()
  return (
    <StyledLogo>
      <Img src={isDarkMode? DarkLogo:LightLogo} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
