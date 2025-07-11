import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  height: calc(100vh - 56px); // Account for bottom navigation
`;

const Maintenance: React.FC = () => {
  return (
    <Container>
      <h1>Maintenance</h1>
      <p>View and manage maintenance tasks</p>
    </Container>
  );
};

export default Maintenance; 