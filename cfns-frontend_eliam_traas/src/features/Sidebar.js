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
  const [activeProviders, setActiveProviders] = useState([]);
  const [isChecked1, setIsChecked1] = useState(false);
  const [sliderValue1, setSliderValue1] = useState(50);
  const [isChecked2, setIsChecked2] = useState(false);
  const [sliderValue2, setSliderValue2] = useState(50);

  const showSidebar = () => {
    if (!sidebar) {
      console.log("Sidebar opened");
    } else {
      console.log("Sidebar closed");
    }
    setSidebar(!sidebar);
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    console.log(`Checkbox 1 is value ${isChecked1 ? 0 : 1}`);
  };

  const handleSliderChange1 = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue1(value);
    console.log(`Slider 1 value changed to ${value}`);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    console.log(`Checkbox 2 is value ${isChecked2 ? 0 : 1}`);
  };

  const handleSliderChange2 = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue2(value);
    console.log(`Slider 2 value changed to ${value}`);
  };

  const handleProviderClick = (provider) => {
    const isActive = activeProviders.includes(provider);

    if (isActive) {
      setActiveProviders(activeProviders.filter((p) => p !== provider));
      console.log(`${provider} is value 0`);
    } else {
      setActiveProviders([...activeProviders, provider]);
      console.log(`${provider} is value 1`);
    }
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
              isActive={activeProviders.includes('Vodafone')}
              onClick={() => handleProviderClick('Vodafone')}
            >
              Vodafone
            </ProviderButton>
            <ProviderButton
              isActive={activeProviders.includes('KPN')}
              onClick={() => handleProviderClick('KPN')}
            >
              KPN
            </ProviderButton>
            <ProviderButton
              isActive={activeProviders.includes('Odido')}
              onClick={() => handleProviderClick('Odido')}
            >
              Odido
            </ProviderButton>
            <ProviderButton
              isActive={activeProviders.includes('Tampnet')}
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
              <SliderLabel>Golfhoogte 1: {sliderValue1} cm</SliderLabel>
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
              <SliderLabel>Golfhoogte 2: {sliderValue2} cm</SliderLabel>
            </SliderContainer>
          </CheckboxSliderContainer>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
