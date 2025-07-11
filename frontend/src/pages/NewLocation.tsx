import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  height: calc(100vh - 56px); // Account for bottom navigation
`;

const NewLocation: React.FC = () => {
  return (
    <Container>
      <h1>New Location</h1>
      <p>Add a new location here</p>
    </Container>
  );
};

export default NewLocation; 