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
  font-size: 30px; // Tekstgrootte
  height: 80px; // Hoogte van de pictogram
  display: flex; // Flexbox layout
  align-items: center; // Gecentreerde uitlijning van items
  color: white; // Pictogramkleur
`;

// Blauwe CFNS-titel op Nav
const CFNSTitle = styled.h1`
  text-align: center; // Gecentreerde uitlijning van tekst
  color: white; // Tekstkleur
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
  margin-right: 10px; // Ondermarge
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
  background-color: ${({ isActive }) => (isActive ? 'darkblue' : 'blue')}; // Achtergrondkleur van de knop
  color: white; // Tekleur
  border: none; // Geen rand
  border-radius: 5px; // Afronding van de hoeken
  cursor: pointer; // Wijziging van de cursor bij hover
`;

// Styled components voor de Checkbox en Slider
const CheckboxSliderContainer = styled.div`
  display: flex; // Flexbox layout
  align-items: center; // Gecentreerde uitlijning van items
  margin-bottom: 20px;
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
  const [isChecked1, setIsChecked1] = useState(false);
  const [sliderValue1, setSliderValue1] = useState(50);
  const [isChecked2, setIsChecked2] = useState(false);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [activeProvider, setActiveProvider] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleSliderChange1 = (event) => {
    setSliderValue1(event.target.value);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleSliderChange2 = (event) => {
    setSliderValue2(event.target.value);
  };

  const handleProviderClick = (provider) => {
    setActiveProvider(provider);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <CFNSTitle>CFNS</CFNSTitle>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <CloseButton>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
          </CloseButton>
          <ProviderButtonsContainer>
            <ProviderButton
              isActive={activeProvider === 'Vodafone'}
              onClick={() => handleProviderClick('Vodafone')}
            >
              Vodafone
            </ProviderButton>
            <ProviderButton
              isActive={activeProvider === 'KPN'}
              onClick={() => handleProviderClick('KPN')}
            >
              KPN
            </ProviderButton>
            <ProviderButton
              isActive={activeProvider === 'Odido'}
              onClick={() => handleProviderClick('Odido')}
            >
              Odido
            </ProviderButton>
            <ProviderButton
              isActive={activeProvider === 'Tampnet'}
              onClick={() => handleProviderClick('Tampnet')}
            >
              Tampnet
            </ProviderButton>
          </ProviderButtonsContainer>
          {/* Eerste CheckboxSliderContainer */}
          <CheckboxSliderContainer>
            <CheckButton onClick={handleCheckboxChange1}>
              {isChecked1 && <CheckImage src={checkmarkImage} alt="Checkmark" />}
            </CheckButton>
            <SliderContainer>
              <Slider
                type="range"
                min="0"
                max="300"
                value={sliderValue1}
                onChange={handleSliderChange1}
              />
              <SliderLabel>Golfhoogte: {sliderValue1} cm</SliderLabel>
            </SliderContainer>
          </CheckboxSliderContainer>
          {/* Tweede CheckboxSliderContainer */}
          <CheckboxSliderContainer>
            <CheckButton onClick={handleCheckboxChange2}>
              {isChecked2 && <CheckImage src={checkmarkImage} alt="Checkmark" />}
            </CheckButton>
            <SliderContainer>
              <Slider
                type="range"
                min="0"
                max="300"
                value={sliderValue2}
                onChange={handleSliderChange2}
              />
              <SliderLabel>Golfhoogte: {sliderValue2} cm</SliderLabel>
            </SliderContainer>
          </CheckboxSliderContainer>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
