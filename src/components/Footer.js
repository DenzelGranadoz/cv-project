import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <FooterWrap>
        <A href="https://github.com/DenzelGranadoz" target="_blank">
          Made by: Denzel Granadoz
        </A>
        <Span>:</Span>
        <A href="https://github.com/DenzelGranadoz/cv-project" target="_blank">
          Click me for Source Code
        </A>
      </FooterWrap>
    );
  }
}

const FooterWrap = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-family: sans-serif;
`;

const A = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

const Span = styled.span`
  color: #ffffff;
  padding: 0 2rem;
  font-weight: bold;
`;

export default Footer;
