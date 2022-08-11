import React from 'react';
import styled from 'styled-components';

class PersonalSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ContainerDiv>
        <HeaderDiv>
          <NameDiv>
            <span>{this.props.personal.firstName || 'First Name, '}</span>
            <span>{this.props.personal.lastName || 'Last Name'}</span>
            <h2>{this.props.personal.position || 'Position'}</h2>
          </NameDiv>
          <DescriptionDiv>
            <h4>{this.props.personal.description || 'About Me'}</h4>
          </DescriptionDiv>
        </HeaderDiv>
        <PhotoDiv>
          <Image src={this.props.image} alt="" />
          <div>
            <strong>Address:</strong>
            <p>{this.props.personal.address}</p>
          </div>
          <div>
            <strong>Phone Number:</strong>
            <p>{this.props.personal.phoneNumber}</p>
          </div>
          <div>
            <strong>Email Address:</strong>
            <p>{this.props.personal.emailAddress}</p>
          </div>
        </PhotoDiv>
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  height: 100%;
  display: contents;
`;

const HeaderDiv = styled.div`
  background-color: #2b7a77;
  height: 12rem;
  display: flex;
  grid-area: header;
`;

const NameDiv = styled.div`
  flex: 1 1 0;
  padding: 3.5rem 2rem;
`;

const DescriptionDiv = styled.div`
  flex: 1 1 0;
  padding: 2rem 1rem;
  font-style: italic;
`;

const PhotoDiv = styled.div`
  max-width: 250px;
  height: 100%;
  background-color: #46464670;
  padding: 1.5rem;
  word-wrap: break-word;
  grid-area: personal;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 2rem;
  border-radius: 50%;
`;

export default PersonalSection;
