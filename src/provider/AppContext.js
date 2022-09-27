import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    if (menuOpen || boxShowing.visible) {
      return (document.querySelector("html").style.overflow = "hidden");
    }
    return (document.querySelector("html").style.overflow = "initial");
  }, [menuOpen, boxShowing.visible]);

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

export const AppContextProvider = ({ children }) => {
  <AppContext>{children}</AppContext>;
};
