import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <HeaderName>CV Application</HeaderName>
      </HeaderWrap>
    );
  }
}

const HeaderWrap = styled.header`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 2px solid #8e8d8a;
`;

const HeaderName = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #e98074;
`;

export default Header;
