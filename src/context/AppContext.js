import { createContext, useContext, useReducer } from "react";
import { appReducer, initialState } from "./appReducer";




const AppContext = createContext();


export const useAppContext = () => {
const context = useContext(AppContext);
    if (!context) {
        throw new Error('Error ...');
    }
  return context;
}


export const AppProvider =({ children }) => {
 const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            { children }
        </AppContext.Provider>
    )
};