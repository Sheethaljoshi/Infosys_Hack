import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
  color: white;
  animation: ${fadeIn} 1s ease-in;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const LoadingText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: white;
    animation: loading 1.5s infinite ease-in-out;
  }

  @keyframes loading {
    0% {
      left: -40%;
    }
    100% {
      left: 100%;
    }
  }
`;

const InitScreen: React.FC = () => {
  return (
    <Container>
      <Logo>🚀</Logo>
      <LoadingText>Initializing Application...</LoadingText>
      <ProgressBar />
    </Container>
  );
};

export default InitScreen; 