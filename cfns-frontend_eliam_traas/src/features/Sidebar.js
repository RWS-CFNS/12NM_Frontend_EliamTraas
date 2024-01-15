import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import checkmarkImage from "../utility/checkmark.png";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  color: white;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-items: center;
  margin-top: 50px;
`;

const ProviderButton = styled.button`
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckButton = styled.button`
  width: 20px;
  height: 20px;
  margin-bottom: 20px;
  margin-right: 60px;
  background-color: #15171c;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

const CheckImage = styled.img`
  width: 10px;
  height: 10px;
  margin-left: -5px;
`;

const CFNSTitle = styled.h1`
  text-align: center;
  color: blue;
  margin-left: 200px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
          <SidebarWrap>
            <ProviderButton>Vodafone</ProviderButton>
            <ProviderButton>KPN</ProviderButton>
            <ProviderButton>Odido</ProviderButton>
            <ProviderButton>Tampnet</ProviderButton>
            <CheckButton onClick={handleCheckboxChange}>
              <CheckImage src={checkmarkImage} alt="Checkmark" />
            </CheckButton>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
