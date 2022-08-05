import React from 'react';
import styled from 'styled-components';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormWrapper onSubmit={this.props.handleSubmit}>
        <input
          onChange={this.props.handleChange('position')}
          type="text"
          name="position"
          placeholder="Position"
        />
        <input
          onChange={this.props.handleChange('companyName')}
          type="text"
          name="companyName"
          placeholder="Company Name"
        />
        <input
          onChange={this.props.handleChange('cityName')}
          type="text"
          name="cityName"
          placeholder="City Name"
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

export default Experience;
