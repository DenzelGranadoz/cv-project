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
          <DarkBtn type="submit">Show Example</DarkBtn>
          <DarkBtn type="button" onClick={this.props.handleExport}>
            Export to PDF
          </DarkBtn>
          <ResetBtn type="button" onClick={this.props.handleReset}>
            Reset
          </ResetBtn>
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
  max-width: 990px;
  margin: 0 1em;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const DarkBtn = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.2rem;
  background-color: #175654;
`;

const ResetBtn = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.2rem;
  background-color: #c55858;
`;

export default Form;
