import {createContext,useState} from 'react';

const Provider = ({ children }) =>{
    const [currentPerson,setCurrentPerson] = useState({});
    return (            
            <AppContext.Provider value={[currentPerson,setCurrentPerson]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();

export default Provider;