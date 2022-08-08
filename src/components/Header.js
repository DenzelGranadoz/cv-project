import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <HeaderName>CV Maker</HeaderName>
      </HeaderWrap>
    );
  }
}

const HeaderWrap = styled.header`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  background-color: #2b7a77;
`;

const HeaderName = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #ffffff;
`;

export default Header;
