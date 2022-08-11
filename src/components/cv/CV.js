import React from 'react';
import styled from 'styled-components';
import PersonalSection from './PersonalSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PreviewWrapper id="divToPrint">
        <PersonalSection
          personal={this.props.personal}
          image={this.props.image}
        />
        <ExperienceSection experience={this.props.experience} />
        <EducationSection education={this.props.education} />
      </PreviewWrapper>
    );
  }
}

const PreviewWrapper = styled.div`
  flex: 1 1 0;
  background-color: white;
  min-width: 1000px; // for the pdf width
  min-height: 90rem; // for the pdf height
  margin: 0 1em;
  overflow: hidden;
  display: grid;
  grid:
    'header header header' 12rem
    'personal exp exp' minmax(10rem, auto)
    'personal educ educ' auto /
    minmax(250px, auto) 1fr 1fr;
`;

export default CV;
