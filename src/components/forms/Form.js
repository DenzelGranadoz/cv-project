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
          input={this.props.inputPersonal}
          handleChange={this.props.handleChangePersonal}
          handleChangeImage={this.props.handleChangeImage}
          handleSubmit={this.props.handleSubmit}
        />
        <Experience
          input={this.props.input}
          handleChange={this.props.handleChangeExperience}
          handleSubmit={this.props.handleSubmit}
        />
        <Education
          input={this.props.input}
          handleChange={this.props.handleChangeEducation}
          handleSubmit={this.props.handleSubmit}
        />
        <>
          <Button type="submit">Show Example</Button>
          <Button type="submit">Export to PDF</Button>
          <Button type="submit">Reset</Button>
        </>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div`
  background-color: #464646;
  border-radius: 8px;
  flex: 1 1 0;
  min-width: 300px;
  margin: 0 1em;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.2rem;
`;

export default Form;
