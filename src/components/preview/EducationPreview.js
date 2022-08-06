import React from 'react';

class EducationPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.education.universityName}</p>
        <p>{this.props.education.cityName}</p>
        <p>{this.props.education.degree}</p>
        <p>{this.props.education.from}</p>
        <p>{this.props.education.to}</p>
      </div>
    );
  }
}

export default EducationPreview;
