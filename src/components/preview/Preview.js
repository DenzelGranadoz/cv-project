import React from 'react';
import styled from 'styled-components';
import PersonalPreview from './PersonalPreview';
import ExperiencePreview from './ExperiencePreview';
import EducationPreview from './EducationPreview';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PreviewWrapper id="divToPrint">
        <PersonalPreview
          personal={this.props.personal}
          image={this.props.image}
        />
        <ExperiencePreview experience={this.props.experience} />
        <EducationPreview education={this.props.education} />
      </PreviewWrapper>
    );
  }
}

const PreviewWrapper = styled.div`
  flex: 1 1 0;
  background-color: white;
  min-width: 900px;
  min-height: 90rem; // for the pdf height 
  width: 820px
  margin: 0 1em;
  overflow: hidden;
  display: grid;
  grid:
    'header header header' 12rem
    'personal exp exp' minmax(10rem, auto)
    'personal educ educ' auto /
    minmax(250px, auto) 1fr 1fr;
`;

export default Preview;
