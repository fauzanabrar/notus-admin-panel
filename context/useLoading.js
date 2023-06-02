import React, { createContext, useContext, useState } from 'react';
import { IconLoadingSpinner } from 'components/common/IconLoadingSpinner';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading && <IconLoadingSpinner />}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
