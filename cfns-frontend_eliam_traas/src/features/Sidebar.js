import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import checkmarkImage from "../utility/checkmark.png";

// Styled components voor de Navbar
// Zwarte balk bovenaan de pagina
const Nav = styled.div`
  background: #333333; // Achtergrondkleur van de balk
  height: 60px; // Hoogte van de balk
  display: flex; // Flexbox layout
  align-items: center; // Gecentreerde uitlijning van items
`;

// Gebruikt om de zijbalk te openen
const NavIcon = styled(Link)`
  margin-left: 20px; // Linkermarge
  font-size: 30px; // Tekengrootte
  height: 80px; // Hoogte van het pictogramgebied
  display: flex; // Flexbox layout
  align-items: center; // Gecentreerde uitlijning van items
  color: white; // Tekleur
`;

// Blauwe CFNS-titel op Nav
const CFNSTitle = styled.h1`
  text-align: center; // Gecentreerde uitlijning van tekst
  color: white; // Tekleur
  margin-left: 250px; // Linkermarge
`;

// Styled components voor de Sidebar
const SidebarNav = styled.nav`
  background: #333333; // Achtergrondkleur van de zijbalk
  width: 250px; // Breedte van de zijbalk
  height: 100vh; // Volledige hoogte van het scherm
  display: flex; // Flexbox layout
  flex-direction: column; // Stapel kolommen boven op elkaar
  position: fixed; // Vaste positie op het scherm
  top: 0; // Afstand vanaf de bovenkant van het scherm
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")}; // Positie van de zijbalk (ingeschoven of uitgeschoven)
  transition: 300ms; // Overgangseffect
  z-index: 10; // Z-index voor stapeling van elementen
`;

const CloseButton = styled.div`
  display: flex; // Flexbox layout
  justify-content: flex-end; // Uitlijning naar rechts
`;

// Styled components voor de ProviderButtons
const ProviderButtonsContainer = styled.div`
  display: grid; // Grid layout
  grid-template-columns: repeat(2, 1fr); // Grid kolommen (2 kolommen)
  grid-gap: 10px; // Ruimte tussen de kolommen
  justify-items: center; // Gecentreerde uitlijning van items
  margin-top: 40px; // Bovenmarge
  margin-bottom: 50px; // Ondermarge
`;

const ProviderButton = styled.button`
  width: 100px; // Breedte van de knop
  height: 40px; // Hoogte van de knop
  margin-bottom: 20px; // Ondermarge
  font-size: 16px; // Tekengrootte
  background-color: blue; // Achtergrondkleur van de knop
  color: white; // Tekleur
  border: none; // Geen rand
  border-radius: 5px; // Afronding van de hoeken
  cursor: pointer; // Wijziging van de cursor bij hover
`;

// Styled components voor de Checkbox en Slider
const CheckboxSliderContainer = styled.div`
  display: flex; // Flexbox layout
  align-items: center; // Gecentreerde uitlijning van items
`;

const CheckButton = styled.button`
  width: 20px; // Breedte van de knop
  height: 20px; // Hoogte van de knop
  margin-right: 20px; // Rechtermarge
  margin-left: 20px; // Linkermarge
  background-color: #333333; // Achtergrondkleur van de knop
  color: white; // Tekstkleur
  border: 1px solid white; // Randstijl
  border-radius: 5px; // Afronding van de hoeken
  cursor: pointer; // Wijziging van de cursor bij hover
`;

const CheckImage = styled.img`
  width: 15px; // Breedte van de afbeelding
  height: 15px; // Hoogte van de afbeelding
  margin-left: -5px; // Linkermarge (negatief om naar links te verplaatsen)
`;

const SliderContainer = styled.div`
  width: 180px; // Breedte van de container
`;

const Slider = styled.input`
  width: 100%; // Volledige breedte van de container
  height: 100%; // Volledige hoogte van de container
  transition: opacity 0.2s; // Overgangseffect voor de slider

  &:hover {
    opacity: 1; // Ondoorzichtigheid bij hover
  }

  &::-webkit-slider-thumb {
    cursor: pointer; // Wijziging van de cursor bij hover
  }
`;

const SliderLabel = styled.div`
  color: white; // Tekstkleur
  text-align: center; // Gecentreerde uitlijning van tekst
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
              <SliderLabel>Golfhoogte: {sliderValue} cm</SliderLabel>
            </SliderContainer>
          </CheckboxSliderContainer>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
