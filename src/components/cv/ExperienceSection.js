import React from 'react';
import styled from 'styled-components';

class ExperienceSection extends React.Component {
  constructor(props) {
    super(props);
  }

  renderExperiencePreview = () => {
    return this.props.experience.map((experience) => (
      <ExpDiv key={experience.id}>
        <PositionTag>{experience.position}</PositionTag>
        <CompanyTag>{experience.companyName + ', '}</CompanyTag>
        <CompanyTag>{experience.cityName}</CompanyTag>
        <br></br>
        <DateTag>{experience.from + ' - '}</DateTag>
        <DateTag>{experience.to}</DateTag>
      </ExpDiv>
    ));
  };

  render() {
    return (
      <ContainerDiv>
        <H2>Experience</H2>
        <hr></hr>
        {this.renderExperiencePreview()}
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  grid-area: exp;
  padding: 1rem 2rem;
`;

const H2 = styled.h2`
  color: #175654;
`;

const ExpDiv = styled.div`
  margin-bottom: 3rem;
`;

const PositionTag = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
  color: black;
`;

const CompanyTag = styled.span`
  color: black;
  font-size: 1.3rem;
  font-weight: normal;
  font-style: italic;
`;

const DateTag = styled.span`
  color: black;
  font-size: 1rem;
  font-weight: normal;
`;

export default ExperienceSection;
