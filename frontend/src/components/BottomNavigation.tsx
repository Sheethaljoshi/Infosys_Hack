import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Co2Icon from '@mui/icons-material/Co2';
import BuildIcon from '@mui/icons-material/Build';

const StyledBottomNavigation = styled(MuiBottomNavigation)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/carbon-emission') return 1;
    if (path === '/maintenance') return 2;
    return 0; // Default to new location
  };

  return (
    <StyledBottomNavigation
      value={getActiveTab()}
      onChange={(_, newValue) => {
        switch (newValue) {
          case 0:
            navigate('/new-location');
            break;
          case 1:
            navigate('/carbon-emission');
            break;
          case 2:
            navigate('/maintenance');
            break;
        }
      }}
      showLabels
    >
      <BottomNavigationAction 
        label="New Location" 
        icon={<LocationOnIcon />} 
      />
      <BottomNavigationAction 
        label="Carbon Emission" 
        icon={<Co2Icon />} 
      />
      <BottomNavigationAction 
        label="Maintenance" 
        icon={<BuildIcon />} 
      />
    </StyledBottomNavigation>
  );
};

export default BottomNav; 