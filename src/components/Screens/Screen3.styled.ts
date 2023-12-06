import styled from "styled-components";
import doodlesBackground from "./ScreensImages/doodle-items-bg.svg"; 

export const ScreenBlock = styled.div`
  width: 100%;
  min-height: 50vh; 
  background: url(${doodlesBackground}) repeat;
`;


export const FilterBlock = styled.div`
  margin: 30px;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 96px;
  letter-spacing: 0em;
  text-align: left;
`;

export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;

`;

export const FilterItem = styled.li`

  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: rgba(57, 62, 70, 0.7);
  cursor: pointer;
`;

export const ProjectList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px;
`;

export const ProjectItem = styled.div`
  border-radius: 20px;
  background-color: rgba(57, 62, 70, 0.5);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
   padding: 10px;

`;

export const ProjectImage = styled.img`
  height: 100px;
  width: 150px;
  border-radius: 5px;
  border: none;
`;

export const ProjectTitle = styled.div``;

export const ProjectSource = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;