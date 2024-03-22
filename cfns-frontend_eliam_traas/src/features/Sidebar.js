import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import checkmarkImage from "../utility/checkmark.png";
import {
  Nav,
  NavIcon,
  CFNSTitle,
  SidebarNav,
  CloseButton,
  ProviderButtonsContainer,
  ProviderButton,
  CheckboxSliderContainer,
  CheckButton,
  CheckImage,
  SliderContainer,
  Slider,
  SliderLabel
} from "./StyledComponents";

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
