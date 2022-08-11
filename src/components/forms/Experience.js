import React from 'react';
import styled from 'styled-components';
import ExperienceItem from './ExperienceItem';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  renderExperience = () => {
    return this.props.experience.map((experience) => (
      <ExperienceItem
        key={experience.id}
        id={experience.id}
        experienceItem={experience}
        handleChange={this.props.handleChange}
        handleDelete={this.props.handleDelete}
      />
    ));
  };

  render() {
    return (
      <FormWrapper>
        <h3>Experience</h3>
        {this.renderExperience()}
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

export default Experience;
