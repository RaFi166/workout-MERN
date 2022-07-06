import { useState } from "react";
import { createContext } from "react";

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [storage, setStorage] = useState();
  const addSubmit = () => {
    
  };
  return (
    <WorkoutContext.Provider value={{ name: "rafi", addSubmit }}>
      {children}
    </WorkoutContext.Provider>
  );
};
