import React from 'react';
import styled from 'styled-components';

class EducationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props.educationItem;
    return (
      <Item>
        <input
          onChange={this.props.handleChange(id)}
          type="text"
          name="universityName"
          placeholder="University Name"
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
          name="degree"
          placeholder="Degree"
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

export default EducationItem;
