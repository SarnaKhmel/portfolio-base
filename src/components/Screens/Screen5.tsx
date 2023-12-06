import React from "react";
import img from './ScreensImages/img3.svg'
import { ScreenBlock, InfoBlock, Title, ImgBlock, Image, ContactsBlock, ContactList, ContactItem } from './Screen5.styled'

const Screen4: React.FC = () => {
  return (
    <ScreenBlock name="screen4">
      <ContactsBlock>

        <InfoBlock>
          <Title>
            My contacts
          </Title>
          <ImgBlock>
            <Image src={img} />
          </ImgBlock>
        </InfoBlock>

        <ContactList>
          <ContactItem>Linkedin</ContactItem>
          <ContactItem>Email</ContactItem>
          <ContactItem>Facebook</ContactItem>
          <ContactItem>Telegram</ContactItem>
          <ContactItem>Phone</ContactItem>
        </ContactList>
      </ContactsBlock>

    </ScreenBlock>
  );
};




export default Screen4;
