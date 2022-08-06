import React from 'react';
import styled from 'styled-components';
import Forms from './forms/Form';
import Preview from './preview/Preview';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        position: '',
        phoneNumber: '',
        emailAddress: '',
        description: '',
      },
      experience: {
        position: '',
        companyName: '',
        cityName: '',
        from: '',
        to: '',
      },
      education: {
        universityName: '',
        cityName: '',
        degree: '',
        from: '',
        to: '',
      },
    };
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePersonal = (key) => (e) => {
    let newPersonal = {
      ...this.state.personal,
      [key]: e.target.value,
    };
    this.setState({
      personal: newPersonal,
    });
  };

  handleChangeExperience = (key) => (e) => {
    let newExperience = {
      ...this.state.experience,
      [key]: e.target.value,
    };
    this.setState({
      experience: newExperience,
    });
  };

  handleChangeEducation = (key) => (e) => {
    let newEducation = {
      ...this.state.education,
      [key]: e.target.value,
    };
    this.setState({
      education: newEducation,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.personal);
  }

  render() {
    return (
      <MainWrap>
        <Forms
          inputPersonal={this.state.personal}
          handleChangePersonal={this.handleChangePersonal}
          handleSubmit={this.handleSubmit}
          handleChangeExperience={this.handleChangeExperience}
          handleChangeEducation={this.handleChangeEducation}
        />
        <Preview
          personal={this.state.personal}
          experience={this.state.experience}
          education={this.state.education}
        />
      </MainWrap>
    );
  }
}

const MainWrap = styled.main`
  display: flex;
  margin: 3rem 6rem;
`;

export default Main;
