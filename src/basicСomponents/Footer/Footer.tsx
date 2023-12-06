import styled from "styled-components";

import { LuHome, LuPersonStanding, LuFileText, LuLinkedin, LuFacebook, LuInstagram } from "react-icons/lu";


const Footer: React.FC = () => {
  return (
    <FooterBlock>
      <LinksBlock>
        <LinksItem><LuHome size="24" />Home</LinksItem>
        <LinksItem><LuPersonStanding size="24" />About Me</LinksItem>
        <LinksItem><LuFileText size="24" />Works</LinksItem>
      </LinksBlock>
      <LinksBlock >
        <LinksItem>
          <LuLinkedin size="24" />
        </LinksItem>
        <LinksItem>
          <LuFacebook size="24" />
        </LinksItem>
        <LinksItem>
          <LuInstagram size="24" />
        </LinksItem>
      </LinksBlock>
    </FooterBlock>
  )
};

const FooterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LinksBlock = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin: 50px 0px;
`;
const LinksItem = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: rgba(57, 62, 70, 0.7);
  cursor: pointer;
  flex-wrap: nowrap;
  &:hover {
    background-color: rgba(22, 73, 0, 1);
  }
`;

const ContactItem = styled.li``;

export default Footer;
