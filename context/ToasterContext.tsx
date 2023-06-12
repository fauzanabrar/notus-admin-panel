import React, { createContext, useState } from "react";

interface ToasterData {
  showToaster: boolean;
  toasterMessage: string;
}

interface ToasterContextProps {
  data: {
    toaster: ToasterData;
  };
  updateData: (newData: any) => void;
}

const ToasterContext = createContext<ToasterContextProps>({
  data: {
    toaster: {
      showToaster: false,
      toasterMessage: "",
    },
  },
  updateData: () => {},
});

export default ToasterContext;

export const ToasterProvider: React.FC<any> = ({ children }) => {
  const [data, setData] = useState({
    toaster: {
      showToaster: false,
      toasterMessage: "",
    },
  });

  // Mengupdate data konteks dan juga menyimpannya ke penyimpanan
  const updateData = (newData: any) => {
    setData(newData);
  };

  return (
    <ToasterContext.Provider value={{ data, updateData }}>
      {children}
    </ToasterContext.Provider>
  );
};
