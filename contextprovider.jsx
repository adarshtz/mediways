import { createContext, useState } from "react";

const FormContext = createContext();

// eslint-disable-next-line react/prop-types
const FormProvider = ({ children }) => {
  const [isFormActive, setIsFormActive] = useState(false);

  const contextValue = {
    isFormActive,
    setIsFormActive,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export { FormContext, FormProvider };
