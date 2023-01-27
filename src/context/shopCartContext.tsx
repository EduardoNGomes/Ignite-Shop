import { shopCartReducer } from "@/reducer/shopCartReducer";
import { createContext, ReactNode, useReducer } from "react";

export const shopCartContext = createContext({})


interface ShopCartProvider {
  children: ReactNode
}

const initialState = {
  shopCartList: []
}

export function ShopCartProvider({children}: ShopCartProvider){
  const [shopCart, dispatch] = useReducer(shopCartReducer ,initialState)

  return(
    <shopCartContext.Provider value={{}}>
      {children}
    </shopCartContext.Provider>
  )
}