import React from 'react';
import styled from 'styled-components';

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
  }
  renderEducationPreview = () => {
    return this.props.education.map((education) => (
      <EducationDiv key={education.id}>
        <UniversityTag>{education.universityName}</UniversityTag>
        <DetailTag>{education.cityName + ', '}</DetailTag>
        <DetailTag>{education.degree}</DetailTag>
        <br></br>
        <DateTag>{education.from + ' - '}</DateTag>
        <DateTag>{education.to}</DateTag>
      </EducationDiv>
    ));
  };

  render() {
    return (
      <ContainerDiv>
        <H2>Education</H2>
        <hr></hr>
        {this.renderEducationPreview()}
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  grid-area: educ;
  padding: 1rem 2rem;
`;

const H2 = styled.h2`
  color: #175654;
`;

const EducationDiv = styled.div`
  margin-bottom: 3rem;
`;

const UniversityTag = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
  color: black;
`;

const DetailTag = styled.span`
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

export default EducationSection;
