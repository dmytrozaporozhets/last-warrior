import React, {useContext, useState} from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState(false);

  const onToggle = () => setAlert((prev) => !prev);
  return (
    <AlertContext.Provider value={{visible: alert, onToggle}}>
      {children}
    </AlertContext.Provider>
  );
};
