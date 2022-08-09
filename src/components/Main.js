import React from 'react';
import styled from 'styled-components';
import Forms from './forms/Form';
import Preview from './preview/Preview';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        position: '',
        address: '',
        phoneNumber: '',
        emailAddress: '',
        description: '',
      },
      experience: {
        position: '',
        companyName: '',
        cityName: '',
        from: '',
        to: '',
      },
      education: {
        universityName: '',
        cityName: '',
        degree: '',
        from: '',
        to: '',
      },
      image: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePersonal = (key) => (e) => {
    let newPersonal = {
      ...this.state.personal,
      [key]: e.target.value,
    };
    this.setState({
      personal: newPersonal,
    });
  };

  handleChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  handleChangeExperience = (key) => (e) => {
    let newExperience = {
      ...this.state.experience,
      [key]: e.target.value,
    };
    this.setState({
      experience: newExperience,
    });
  };

  handleChangeEducation = (key) => (e) => {
    let newEducation = {
      ...this.state.education,
      [key]: e.target.value,
    };
    this.setState({
      education: newEducation,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.personal);
  }

  handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    document.querySelector('textarea').value = '';

    this.setState({
      personal: {
        firstName: '',
        lastName: '',
        position: '',
        address: '',
        phoneNumber: '',
        emailAddress: '',
        description: '',
      },
      experience: {
        position: '',
        companyName: '',
        cityName: '',
        from: '',
        to: '',
      },
      education: {
        universityName: '',
        cityName: '',
        degree: '',
        from: '',
        to: '',
      },
      image: null,
    });
  };

  printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save('cv.pdf');
    });
  };

  render() {
    return (
      <MainWrap>
        <Forms
          inputPersonal={this.state.personal}
          handleChangePersonal={this.handleChangePersonal}
          handleChangeImage={this.handleChangeImage}
          handleSubmit={this.handleSubmit}
          handleReset={this.handleReset}
          handleExport={this.printDocument}
          handleChangeExperience={this.handleChangeExperience}
          handleChangeEducation={this.handleChangeEducation}
        />
        <Preview
          personal={this.state.personal}
          image={this.state.image}
          experience={this.state.experience}
          education={this.state.education}
        />
      </MainWrap>
    );
  }
}

const MainWrap = styled.main`
  display: flex;
  margin: 4.5rem 12rem;
  height: 100%;
`;

export default Main;
