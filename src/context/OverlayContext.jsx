import { createContext, useContext, useState } from "react"


const OverlayContext = createContext()
const OverlayProvider = ({children}) => {
    const [isActive,setIsActive] = useState(false)
  return (
    <OverlayContext.Provider value={{isActive,setIsActive}}>
        {children}
    </OverlayContext.Provider>
  )
}
export const useOverlay = () => {return useContext(OverlayContext)}
export default OverlayProvider
