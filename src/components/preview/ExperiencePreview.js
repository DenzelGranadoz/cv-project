import React from 'react';
import styled from 'styled-components';

class ExperiencePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerDiv>
        <H2>Experience</H2>
        <hr></hr>
        <PositionTag>{this.props.experience.position}</PositionTag>
        <CompanyTag>{this.props.experience.companyName + ', '}</CompanyTag>
        <CompanyTag>{this.props.experience.cityName}</CompanyTag>
        <br></br>
        <DateTag>{this.props.experience.from + ' - '}</DateTag>
        <DateTag>{this.props.experience.to}</DateTag>
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

export default ExperiencePreview;
