// CourseModules.tsx
import React from 'react';
import CourseModule from '../../types';
import { Container,ModuleContainer, ModuleTitle, ContentList, ContentItem } from './style'; 


interface Props {
  modules: CourseModule[];
}

const CourseModules: React.FC<Props> = ({ modules }) => {
  return (
    <Container>
      {modules.map((module, index) => (
        <ModuleContainer key={index}>
          <ModuleTitle>{module.day}  </ModuleTitle>
          <ContentList>
            {module.content.map((contentItem, idx) => (
              <ContentItem key={idx}>
                <strong>{contentItem.title}</strong>: {contentItem.description}
              </ContentItem>
            ))}
          </ContentList>
        </ModuleContainer>
      ))}
    </Container>
  );
};

export default CourseModules;
