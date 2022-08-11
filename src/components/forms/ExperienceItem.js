import React from 'react';
import styled from 'styled-components';

class ExperienceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props.experienceItem;
    return (
      <Item>
        <input
          onChange={this.props.handleChange(id)}
          type="text"
          name="position"
          placeholder="Position"
        />
        <input
          onChange={this.props.handleChange(id)}
          type="text"
          name="companyName"
          placeholder="Company Name"
        />
        <input
          onChange={this.props.handleChange(id)}
          type="text"
          name="cityName"
          placeholder="City Name"
        />
        <input
          onChange={this.props.handleChange(id)}
          type="text"
          name="from"
          placeholder="From"
        />
        <input
          onChange={this.props.handleChange(id)}
          type="text"
          name="to"
          placeholder="To"
        />
        <Button type="button" onClick={this.props.handleDelete(id)}>
          Delete
        </Button>
      </Item>
    );
  }
}

const Item = styled.div`
  display: inherit;
  flex-direction: inherit;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.25rem 0.2rem;
`;

export default ExperienceItem;
