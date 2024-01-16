import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import checkmarkImage from "../utility/checkmark.png";

// Styled components for the Navbar
// Black bar on top of page
const Nav = styled.div`
  background: #333333;
  height: 60px;
  display: flex;
  align-items: center;
`;

// Used to open the sidebar
const NavIcon = styled(Link)`
  margin-left: 20px;
  font-size: 30px;
  height: 80px;
  display: flex;
  align-items: center;
  color: white;
`;

// Blue CFNS title on Nav
const CFNSTitle = styled.h1`
  text-align: center;
  color: white;
  margin-left: 250px;
`;
// Styled components for the Sidebar
const SidebarNav = styled.nav`
  background: #333333;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;// Zorgt ervoor dat de sidebar over de navbar schuift
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};// Zorgt voor het uitschuiven van de sidebar
  transition: 300ms;
  z-index: 10;// Zorgt ervoor dat het op de eerste laag van de pagina staat 
`;


const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// Styled components for the ProviderButtons
const ProviderButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const ProviderButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Styled components for the Checkbox and Slider
const CheckboxSliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CheckButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin-right: 10px;
  background-color: #333333;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SliderContainer = styled.div`
  width: 100px; /* Adjust as needed */
`;

const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: #333333;
  border: 1px solid white;
  border-radius: 5px;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SliderLabel = styled.div`
  color: white;
  text-align: center;
  margin-top: 5px;
`;

// Main Sidebar component
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const showSidebar = () => setSidebar(!sidebar);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* Navbar */}
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <CFNSTitle>CFNS</CFNSTitle>
        </Nav>
        {/* Sidebar */}
        <SidebarNav sidebar={sidebar}>
          <CloseButton>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
          </CloseButton>
          {/* ProviderButtons Container */}
          <ProviderButtonsContainer>
            <ProviderButton>Vodafone</ProviderButton>
            <ProviderButton>KPN</ProviderButton>
            <ProviderButton>Odido</ProviderButton>
            <ProviderButton>Tampnet</ProviderButton>
          </ProviderButtonsContainer>
          {/* Checkbox and Slider Container */}
          <CheckboxSliderContainer>
            <CheckButton onClick={handleCheckboxChange}>
              {isChecked && <CheckImage src={checkmarkImage} alt="Checkmark" />}
            </CheckButton>
            <SliderContainer>
              <Slider
                type="range"
                min="0"
                max="300"
                value={sliderValue}
                onChange={handleSliderChange}
              />
              <SliderLabel>Golfhoogte: {sliderValue}</SliderLabel>
            </SliderContainer>
          </CheckboxSliderContainer>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
