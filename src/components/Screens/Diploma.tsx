import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import diplomaData from "../../data/diploma.json";
import { AiOutlineCloseCircle } from "react-icons/ai";



const Diploma: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [data, setData] = useState<{ url: string; caption: string }[]>([]);

  useEffect(() => {
    setData(diplomaData);
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  return (
    <ScreenBlock name="screen4">
      <InfoBlock>
        <Title>My diplomas and certificates</Title>
        <List>
          <List>
            {data.map((item, index) => (
              <Item key={index} onClick={() => openModal(item.url)}>
                <ItemImg src={item.url} alt={item.caption} />
              </Item>
            ))}
          </List>
          <ModalWrapper
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal">
            <ModalBlock>
              {selectedImage && (
                <ModalImg src={selectedImage} alt="Selected Image" />
              )}
              <CloseBlock>
                <AiOutlineCloseCircle size={32} onClick={closeModal} />
              </CloseBlock>
            </ModalBlock>
          </ModalWrapper>
        </List>
      </InfoBlock>
    </ScreenBlock>
  );
};

const ScreenBlock = styled.div`
  width: 100%;
  min-height: 30vh; 
`;
const InfoBlock = styled.div`
  margin: 25px;
`;
const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 768px) {
    font-size: 47px;
    font-weight: 500;
    line-height: 50px;
  } 
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;
const Item = styled.li`
  height: 150px;
  width: 200px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: rgba(57, 62, 70, 0.7);
  cursor: pointer;
`;
const ItemImg = styled.img`
  height: 100%;
  width: 100%;

`;

const ModalWrapper = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index:100;

`;

const ModalBlock = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalImg = styled.img`
  height: 60vh;
  width: 70vw;
  border-radius: 30px;
  border: 1px solid black;
`;

const CloseBlock = styled.div`
  padding: 32px 32px;
  border-radius: 30px;
  background-color: rgba(22, 73, 0, 1);
  cursor: pointer;
  &:hover {
    background-color: rgba(57, 62, 70, 0.7);
  }
`;


export default Diploma;
