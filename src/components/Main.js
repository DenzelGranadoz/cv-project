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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.personal);
  }

  render() {
    return (
      <MainWrap>
        <Forms
          input={this.state.personal}
          handleChange={this.handleChangePersonal}
          handleSubmit={this.handleSubmit}
        />

        <Preview personal={this.state.personal} />
      </MainWrap>
    );
  }
}

const MainWrap = styled.main`
  display: flex;
  margin: 3rem;
  height: 80vh;
`;

export default Main;
