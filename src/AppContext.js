import React, { useState } from "react";

export const TheAppContext = React.createContext();

const AppContext = ({ children }) => {
  const [DOMContentLoaded, setDomContentLoaded] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [boxShowing, setBoxShowing] = useState({
    visible: false,
    component: null,
  });

  const load_callback = () => {
    setDomContentLoaded(true);
  };

  return (
    <TheAppContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        boxShowing,
        setBoxShowing,
        DOMContentLoaded,
        setDomContentLoaded,
        load_callback,
      }}
    >
      {children}
    </TheAppContext.Provider>
  );
};

export default AppContext;
