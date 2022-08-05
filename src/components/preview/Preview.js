import React from 'react';
import styled from 'styled-components';
import PersonalPreview from './PersonalPreview';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PreviewWrapper>
        <PersonalPreview personal={this.props.personal} />
      </PreviewWrapper>
    );
  }
}

const PreviewWrapper = styled.div`
  flex: 1 1 0;
  width: 0;
  border: 1px solid black;
  margin: 0 2em;
`;

export default Preview;
