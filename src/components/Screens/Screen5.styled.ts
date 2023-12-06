import styled from "styled-components";

export const ScreenBlock = styled.div`
  width: 100%;
  min-height: 30vh; 
  
`;
export const ContactsBlock = styled.div`
  margin: 25px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:25px;
  
`;


export const InfoBlock = styled.div`
  margin: 25px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;

export const ContactList = styled.ul`
  list-style-type: none;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;


`;
export const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ImgBlock = styled.div``;
export const Image = styled.img``;

export const ContactRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const ContactItem = styled.li`
display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: rgba(57, 62, 70, 0.7);
  cursor: pointer;
  &:hover {
    background-color: rgba(22, 73, 0, 1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;
