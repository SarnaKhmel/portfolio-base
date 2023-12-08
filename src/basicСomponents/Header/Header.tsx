import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-scroll";
import enTranslation from "../../Languages/en.json";
import ukTranslation from "../../Languages/uk.json";
import {
  HeaderBlock,
  HeaderDesktop,
  LinkBlock,
  Select,
  Option,
  MobileMenuContent, MobileSelect, MobileMenuButton

} from './Header.styled';
import Modal from "react-modal";


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    uk: {
      translation: ukTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});



const Header: React.FC = () => {
  const { t } = useTranslation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const openCloseMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <HeaderBlock>

      <HeaderDesktop name="header">
        <StyledLink to="header" spy={true} smooth={true} duration={250}>
          {t("OleksaSarnatskyi")}
        </StyledLink>
        <LinkBlock>
          <StyledLink
            activeClass="active"
            to="screen1"
            spy={true}
            smooth={true}
            duration={250}>
            {t("Home")}
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="screen2"
            spy={true}
            smooth={true}
            duration={250}>
            {t("Projects")}
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="screen3"
            spy={true}
            smooth={true}
            duration={250}>
            {t("Сertificates")}
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="screen4"
            spy={true}
            smooth={true}
            duration={250}>
            {t("Contacts")}
          </StyledLink>
          <Select onChange={changeLanguage}>
            <Option value="en">🇺🇸{t(" en")}</Option>
            <Option value="uk">🇺🇦{t(" uk")}</Option>
          </Select>
        </LinkBlock>
        <MobileMenuButton onClick={openCloseMobileMenu}>☰</MobileMenuButton>


      </HeaderDesktop>


      <ModalBlock
        isOpen={isMobileMenuOpen}
        onRequestClose={openCloseMobileMenu}
        contentLabel="Mobile Menu"
      >
        <MobileMenuContent onClick={openCloseMobileMenu}>
          <MobileLink to="screen1" spy={true} smooth={true} duration={250}>
            {t("Home")}
          </MobileLink>
          <MobileLink to="screen2" spy={true} smooth={true} duration={250}>
            {t("Projects")}
          </MobileLink>
          <MobileLink to="screen3" spy={true} smooth={true} duration={250}>
            {t("Сertificates")}
          </MobileLink>
          <MobileLink to="screen4" spy={true} smooth={true} duration={250}>
            {t("Contacts")}
          </MobileLink>
          <MobileSelect onChange={changeLanguage}>
            <Option value="en">🇺🇸{t(" en")}</Option>
            <Option value="uk">🇺🇦{t(" uk")}</Option>
          </MobileSelect>
        </MobileMenuContent>
      </ModalBlock>

    </HeaderBlock>
  );
};
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 50px;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MobileLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ModalBlock = styled(Modal)`
  text-decoration: none;
  font-size: 18px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Header;
