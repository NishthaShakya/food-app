//create context,provider,consumer=>use context

import { createContext } from "react";
import { food_list } from "../../assets/assets";

const StoreContext = createContext(); //to make this globally accessible,provide provider

function StoreProvider({children}) {

  const contextValue = {
    food_list
  }

  return <StoreContext.Provider value={contextValue}>
              {children}
        </StoreContext.Provider>
  
}

export { StoreContext , StoreProvider};