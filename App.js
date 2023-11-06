import Splash from "./components/Splash";
import Map from "./components/Map";
import React, { useReducer, useState, useEffect } from "react";
import { AppContext, AppDispatchContext } from "./state/context";
import { appReducer, defaultApp } from "./state/reducer";

export default function App() {
  const [app, dispatch] = useReducer(appReducer, defaultApp);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={dispatch}>
        {showApp && <Map></Map>}
        {!showApp && <Splash></Splash>}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}
