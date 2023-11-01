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
// {"response": {"_bodyBlob": {"_data": [Object]}, "_bodyInit": {"_data": [Object]}, "bodyUsed": false, "headers": {"map": [Object]}, "ok": true, "status": 200, "statusText": "", "type": "default", "url": "https://storage.googleapis.com/locally_seattle_images/data.json?a=b"}}
