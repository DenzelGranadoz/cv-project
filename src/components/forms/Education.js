import React from 'react';
import styled from 'styled-components';
import EducationItem from './EducationItem';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEducation = () => {
    return this.props.education.map((education) => (
      <EducationItem
        key={education.id}
        id={education.id}
        educationItem={education}
        handleChange={this.props.handleChange}
        handleDelete={this.props.handleDelete}
      />
    ));
  };

  render() {
    return (
      <FormWrapper>
        <h3>Education</h3>
        {this.renderEducation()}
        <Button type="button" onClick={this.props.handleAdd}>
          Add
        </Button>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.2rem;
`;

export default Education;
