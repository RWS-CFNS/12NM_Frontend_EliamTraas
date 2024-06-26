import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import checkmarkImage from "../utility/checkmark.png";
import { Link } from 'react-router-dom';
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

// Stelt voor alle parameters de status in
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [activeProviders, setActiveProviders] = useState([]);
  const [isChecked1, setIsChecked1] = useState(false);
  const [sliderValue1, setSliderValue1] = useState(50);
  const [isChecked2, setIsChecked2] = useState(false);
  const [sliderValue2, setSliderValue2] = useState(50);

  // Opent de sidebar
  const showSidebar = () => {
    if (!sidebar) {
      console.log("Sidebar opened");
    } else {
      console.log("Sidebar closed");
    }
    setSidebar(!sidebar);
  };

  // Functie om de checkbox een waarde te geven
  const handleCheckboxChange = (isChecked, setIsChecked, sliderNumber) => {
    setIsChecked(!isChecked);
    console.log(`Checkbox ${sliderNumber} is value ${isChecked ? 0 : 1}`);
  };

  // Functie om de slider een waarde te geven
  const handleSliderChange = (event, setValue, sliderNumber) => {
    const value = parseInt(event.target.value);
    setValue(value);
    console.log(`Slider ${sliderNumber} value changed to ${value}`);
  };

  // Functie om de provider buttons een waarde te geven
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
          <CFNSTitle>
            <a href="https://cfns.nl/About/" style={{ color: 'white' }}>CFNS</a>
          </CFNSTitle>
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
            <CheckButton onClick={() => handleCheckboxChange(isChecked1, setIsChecked1, 1)}>
              {isChecked1 && <CheckImage src={checkmarkImage} alt="Checkmark" />}
            </CheckButton>
            <SliderContainer>
              <Slider
                type="range"
                min="0"
                max="300"
                value={sliderValue1}
                onChange={(event) => handleSliderChange(event, setSliderValue1, 1)}
              />
              <SliderLabel>Golfhoogte 1: {sliderValue1} cm</SliderLabel>
            </SliderContainer>
          </CheckboxSliderContainer>
          <CheckboxSliderContainer>
            <CheckButton onClick={() => handleCheckboxChange(isChecked2, setIsChecked2, 2)}>
              {isChecked2 && <CheckImage src={checkmarkImage} alt="Checkmark" />}
            </CheckButton>
            <SliderContainer>
              <Slider
                type="range"
                min="0"
                max="300"
                value={sliderValue2}
                onChange={(event) => handleSliderChange(event, setSliderValue2, 2)}
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
