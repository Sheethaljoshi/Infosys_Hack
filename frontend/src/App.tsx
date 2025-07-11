import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import InitScreen from './components/InitScreen';
import BottomNav from './components/BottomNavigation';
import NewLocation from './pages/NewLocation';
import CarbonEmission from './pages/CarbonEmission';
import Maintenance from './pages/Maintenance';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initialization process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <InitScreen />;
  }

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/new-location" element={<NewLocation />} />
          <Route path="/carbon-emission" element={<CarbonEmission />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/" element={<Navigate to="/new-location" replace />} />
        </Routes>
        <BottomNav />
      </AppContainer>
    </Router>
  );
};

export default App; 