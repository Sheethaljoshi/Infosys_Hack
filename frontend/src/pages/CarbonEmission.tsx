import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  height: calc(100vh - 56px); // Account for bottom navigation
`;

const CarbonEmission: React.FC = () => {
  return (
    <Container>
      <h1>Carbon Emission</h1>
      <p>Track and monitor carbon emissions</p>
    </Container>
  );
};

export default CarbonEmission; 