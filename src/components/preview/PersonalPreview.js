import React from 'react';

class PersonalPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.personal.firstName}</p>
        <p>{this.props.personal.lastName}</p>
        <p>{this.props.personal.position}</p>
        <p>{this.props.personal.phoneNumber}</p>
        <p>{this.props.personal.emailAddress}</p>
        <p>{this.props.personal.description}</p>
      </div>
    );
  }
}

export default PersonalPreview;
