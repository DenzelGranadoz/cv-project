import React from 'react';
import styled from 'styled-components';
import Forms from './forms/Form';
import CV from './cv/CV';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import uniqid from 'uniqid';

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
      experience: [
        {
          id: uniqid(),
          position: '',
          companyName: '',
          cityName: '',
          from: '',
          to: '',
        },
      ],

      education: [
        {
          id: uniqid(),
          universityName: '',
          cityName: '',
          degree: '',
          from: '',
          to: '',
        },
      ],
      image: null,
    };
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

  handleChangeExperience = (id) => (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      experience: prevState.experience.map((obj) =>
        obj.id === id ? Object.assign(obj, { [name]: value }) : obj
      ),
    }));
  };

  handleAddExperience = () => {
    const newArr = {
      id: uniqid(),
      position: '',
      companyName: '',
      cityName: '',
      from: '',
      to: '',
    };

    this.setState((prevState) => ({
      experience: [...prevState.experience, newArr],
    }));
  };

  handleDeleteExperience = (id) => (e) => {
    this.setState((prevState) => ({
      experience: prevState.experience.filter((obj) => {
        return obj.id !== id;
      }),
    }));
  };

  handleChangeEducation = (id) => (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      education: prevState.education.map((obj) =>
        obj.id === id ? Object.assign(obj, { [name]: value }) : obj
      ),
    }));
  };

  handleAddEducation = () => {
    const newArr = {
      id: uniqid(),
      universityName: '',
      cityName: '',
      degree: '',
      from: '',
      to: '',
    };

    this.setState((prevState) => ({
      education: [...prevState.education, newArr],
    }));

    console.log(this.state.education);
  };

  handleDeleteEducation = (id) => (e) => {
    this.setState((prevState) => ({
      education: prevState.education.filter((obj) => {
        return obj.id !== id;
      }),
    }));
  };

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
      experience: [
        {
          id: uniqid(),
          position: '',
          companyName: '',
          cityName: '',
          from: '',
          to: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          universityName: '',
          cityName: '',
          degree: '',
          from: '',
          to: '',
        },
      ],
      image: null,
    });
  };

  handleShowExample = () => {
    this.handleReset();
    this.setState({
      personal: {
        firstName: 'Christopher ',
        lastName: 'Morgan',
        position: 'Senior Web Developer',
        address: 'Address example',
        phoneNumber: '987123456',
        emailAddress: 'christopher.morgam@gmail.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
      },
      experience: [
        {
          id: uniqid(),
          position: 'Senior React Developer',
          companyName: 'Facebook',
          cityName: 'Silicon Valley',
          from: '2018',
          to: 'Present',
        },
        {
          id: uniqid(),
          position: 'Mid-Level Front End Developer',
          companyName: 'Google',
          cityName: 'Silicon Valley',
          from: '2016',
          to: '2018',
        },
        {
          id: uniqid(),
          position: 'Junior Front End Developer',
          companyName: 'Google',
          cityName: 'Silicon Valley',
          from: '2012',
          to: '2016',
        },
        {
          id: uniqid(),
          position: 'Position',
          companyName: 'Company Name',
          cityName: 'City Name',
          from: 'From',
          to: 'To',
        },
      ],
      education: [
        {
          id: uniqid(),
          universityName: 'International College of the Philippines',
          cityName: '77 Cubao Ave,',
          degree: 'Bachelor of Science in Computer Science',
          from: '2008',
          to: '2012',
        },
        {
          id: uniqid(),
          universityName: 'International College of the Philippines',
          cityName: '77 Cubao Ave,',
          degree: 'Bachelor of Science in Psychology',
          from: '2006',
          to: '2008',
        },
        {
          id: uniqid(),
          universityName: 'University Name',
          cityName: 'City Name',
          degree: 'Course / Degree',
          from: 'From',
          to: 'To',
        },
      ],
      image: null,
    });
  };

  printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('cv.pdf');
    });
  };

  render() {
    return (
      <MainWrap>
        <Forms
          handleChangePersonal={this.handleChangePersonal}
          handleChangeImage={this.handleChangeImage}
          handleShowExample={this.handleShowExample}
          handleExport={this.printDocument}
          handleReset={this.handleReset}
          experience={this.state.experience}
          handleChangeExperience={this.handleChangeExperience}
          handleAddExperience={this.handleAddExperience}
          handleDeleteExperience={this.handleDeleteExperience}
          education={this.state.education}
          handleChangeEducation={this.handleChangeEducation}
          handleAddEducation={this.handleAddEducation}
          handleDeleteEducation={this.handleDeleteEducation}
        />
        <CV
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
