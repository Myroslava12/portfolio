import React, { useState } from 'react';

export const NavigationContext = React.createContext(null);

export const NavigationProvider = ({ children }) => {
    const [activeRoute, setActiveRoute] = useState(null);
    
    return <NavigationContext.Provider value={{ setActiveRoute, activeRoute }}>
        {children}
    </NavigationContext.Provider>
}
