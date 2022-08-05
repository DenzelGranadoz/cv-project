import React from 'react';
import styled from 'styled-components';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormWrapper onSubmit={this.props.handleSubmit}>
        <input
          onChange={this.props.handleChange('universityName')}
          type="text"
          name="universityName"
          placeholder="University Name"
        />
        <input
          onChange={this.props.handleChange('cityName')}
          type="text"
          name="cityName"
          placeholder="City Name"
        />
        <input
          onChange={this.props.handleChange('degree')}
          type="text"
          name="degree"
          placeholder="Degree"
        />
        <input
          onChange={this.props.handleChange('from')}
          type="text"
          name="from"
          placeholder="From"
        />
        <input
          onChange={this.props.handleChange('to')}
          type="text"
          name="to"
          placeholder="To"
        />
        <button type="submit">Delete</button>
        <button type="submit">Add</button>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Education;
