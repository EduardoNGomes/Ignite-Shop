import { actions } from "@/reducer/actions";
import { shopCartReducer } from "@/reducer/shopCartReducer";
import { createContext, ReactNode, useReducer } from "react";
import { shopCartListProps} from '../interfaces/shopCart'


interface ShopCartProps {
  shopCartList: shopCartListProps[]
}

interface ShopCartContextProps {
  shopCart: ShopCartProps
  addItem: (payload:shopCartListProps) => void
  removeItem: (payload:string) => void
}

export const shopCartContext = createContext({} as ShopCartContextProps)


interface ShopCartProvider {
  children: ReactNode
}

const initialState = {
  shopCartList: [] as shopCartListProps[]
}

export function ShopCartProvider({children}: ShopCartProvider){
  const [shopCart, dispatch] = useReducer(shopCartReducer ,initialState)


  function addItem(payload:shopCartListProps){
    dispatch({type: actions.ADD_ITEM, payload})
  }
  function removeItem(payload:string){
    dispatch({type: actions.REMOVE_ITEM, payload})
  }

  return(
    <shopCartContext.Provider value={{
      shopCart,
      addItem,
      removeItem,
    }}>
      {children}
    </shopCartContext.Provider>
  )
}