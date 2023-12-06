import React from "react";
import img from './ScreensImages/img3.svg'
import { ScreenBlock, InfoBlock, Title, ImgBlock, Image, ContactsBlock, ContactList, ContactRow, ContactItem, Link } from './Screen5.styled'
import { LuLinkedin, LuAtSign, LuInstagram, LuFacebook, LuPhoneForwarded } from "react-icons/lu";
import { TbBrandTelegram, TbBrandSkype } from "react-icons/tb";

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
          <ContactRow>
            <ContactItem>
              <LuLinkedin size="24" />
            </ContactItem>
            <ContactItem>
              <LuFacebook size="24" />
            </ContactItem>
            <ContactItem>
              <LuInstagram size="24" />
            </ContactItem>
          </ContactRow>
          <ContactItem>
            <TbBrandTelegram size="24" />
            @sarnakhmel
          </ContactItem>
          <ContactItem>
            <TbBrandSkype size="24" />
            olsarnat
          </ContactItem>
          <ContactItem>
            <LuPhoneForwarded size="24" />
            <Link href="tel:+380-932-073-52">+380-932-073-52</Link>
          </ContactItem>
          <ContactItem>
            <LuAtSign size="24" />
            <Link href="email:olsarnat@gmail.com">olsarnat@gmail.com</Link>
          </ContactItem>



        </ContactList>
      </ContactsBlock>

    </ScreenBlock>
  );
};




export default Screen4;
