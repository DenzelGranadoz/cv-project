import React from 'react';
import styled from 'styled-components';

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormWrapper>
        <h3>Personal Information</h3>
        <input
          onChange={this.props.handleChange('firstName')}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={this.props.handleChange('lastName')}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={this.props.handleChange('position')}
          type="text"
          name="position"
          placeholder="Position"
        />
        <label htmlFor="myImage"> Upload Personal Photo</label>
        <ImageInput
          type="file"
          name="myImage"
          id="myImage"
          onChange={this.props.handleChangeImage}
        />
        <input
          onChange={this.props.handleChange('address')}
          type="text"
          name="address"
          placeholder="Address"
        />
        <input
          onChange={this.props.handleChange('phoneNumber')}
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <input
          onChange={this.props.handleChange('emailAddress')}
          type="text"
          name="emailAddress"
          placeholder="Email Address"
        />
        <textarea
          onChange={this.props.handleChange('description')}
          type="text"
          maxLength={300}
          name="description"
          placeholder="Description"
        />
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const ImageInput = styled.input`
  display: none;
`;

export default Personal;
