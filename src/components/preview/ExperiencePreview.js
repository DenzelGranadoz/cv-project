import React from 'react';

class ExperiencePreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.experience.position}</p>
        <p>{this.props.experience.companyName}</p>
        <p>{this.props.experience.cityName}</p>
        <p>{this.props.experience.from}</p>
        <p>{this.props.experience.to}</p>
      </div>
    );
  }
}

export default ExperiencePreview;
