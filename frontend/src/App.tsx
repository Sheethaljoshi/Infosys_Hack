import React, { useState, useEffect } from 'react';
import InitScreen from './components/InitScreen';

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
    <div>
      {/* Your main app content will go here */}
      <h1>Welcome to the App!</h1>
    </div>
  );
};

export default App; 