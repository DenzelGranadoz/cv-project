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
  border: 4px solid #8e8d8a;
  border-radius: 10px;
  box-shadow: 5px 5px 3px 5px lightgray;
  flex: 1 1 0;
  width: 0;
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.2rem;
`;

export default Form;
