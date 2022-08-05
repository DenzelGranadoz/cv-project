import React from 'react';
import styled from 'styled-components';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormWrapper>
        <Personal
          input={this.props.input}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        <Experience
          input={this.props.input}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        <Education
          input={this.props.input}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div`
  background-color: blue;
  flex: 1 1 0;
  width: 0;
  margin: 0 2rem;
`;

export default Form;
