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
  display: flex;
  justify-content: center;
`;

const HeaderName = styled.h1`
  font-size: 2rem;
`;

export default Header;
