import styled from "styled-components";
import { Link } from "react-router-dom";

// Alle styling van de componenten van de applicatie
export const Nav = styled.div`
  background: #000050;  
  height: 60px;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 20px;
  font-size: 30px;
  height: 80px;
  display: flex;
  align-items: center;
  color: white;
`;

export const CFNSTitle = styled.h1`
  text-align: center;
  color: white;
  margin-left: 250px;
`;

export const SidebarNav = styled.nav`
  background: #000060;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 300ms;
  z-index: 10;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const ProviderButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
`;

export const ProviderButton = styled.button`
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: ${({ isActive }) => (isActive ? 'darkblue' : 'blue')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CheckboxSliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  margin-left: 20px;
  background-color: #333333;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

export const CheckImage = styled.img`
  width: 15px;
  height: 15px;
  margin-left: -5px;
`;

export const SliderContainer = styled.div`
  width: 180px;
`;

export const Slider = styled.input`
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    cursor: pointer;
  }
`;

export const SliderLabel = styled.div`
  color: white;
  text-align: center;
`;
