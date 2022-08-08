import React from 'react';
import styled from 'styled-components';

class PersonalPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ContainerDiv>
        <HeaderDiv>
          <NameDiv>
            <span>{this.props.personal.firstName || 'First Name'}</span>
            <span>{this.props.personal.lastName || ', Last Name'}</span>
            <h2>{this.props.personal.position || 'Position'}</h2>
          </NameDiv>
          <DescriptionDiv>
            <h4>{this.props.personal.description || 'About Me'}</h4>
          </DescriptionDiv>
        </HeaderDiv>
        <PhotoDiv>
          <Image src={this.props.image} alt="" />
          <p>
            <strong>Address:</strong>
            <p>{this.props.personal.address}</p>
          </p>
          <p>
            <strong>Phone Number:</strong>
            <p>{this.props.personal.phoneNumber}</p>
          </p>
          <p>
            <strong>Email Address:</strong>
            <p>{this.props.personal.emailAddress}</p>
          </p>
        </PhotoDiv>
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled.div`
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const HeaderDiv = styled.div`
  grid-area: header;
  width: 100%;
  background-color: #2b7a77;
  height: 12rem;
  display: flex;
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
  grid-area: personal;
  width: 250px;
  height: 100%;
  background-color: #46464670;
  padding: 1.5rem;
  word-wrap: break-word;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

export default PersonalPreview;
