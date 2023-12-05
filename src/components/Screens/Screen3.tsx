import React from "react";
import {
  ScreenBlock,
  FilterBlock,
  Title,
  FilterList,
  FilterItem,
  ProjectList,
  ProjectItem,
  ProjectImage,
  ProjectTitle,
  ProjectSource
} from "./Screen3.styled";

const Screen3: React.FC = () => {
  return (
    <ScreenBlock name="screen3">
      <FilterBlock>
        <Title>
          My recent works
        </Title>
        <FilterList>
          <FilterItem>
            All
          </FilterItem>
          <FilterItem>
            JS
          </FilterItem>
          <FilterItem>
            TS
          </FilterItem>
          <FilterItem>
            Back End
          </FilterItem>
        </FilterList>
      </FilterBlock>
      <ProjectList>
        <ProjectItem>
          <ProjectImage src="#" />
          <ProjectTitle>Sushi with love</ProjectTitle>
          <ProjectSource>
            Link to GitHub
          </ProjectSource>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="#" />
          <ProjectTitle>Sushi with love</ProjectTitle>
          <ProjectSource>
            Link to GitHub
          </ProjectSource>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src="#" />
          <ProjectTitle>Sushi with love</ProjectTitle>
          <ProjectSource>
            Link to GitHub
          </ProjectSource>
        </ProjectItem>
      </ProjectList>
    </ScreenBlock>
  );
};




export default Screen3;
