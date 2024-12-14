import { createContext ,useContext,useState} from "react";

const OpenSlideContext = createContext(null)
const setOpenSlideContext =createContext(null)


// eslint-disable-next-line react/prop-types
export default function SlideProvider({children}) {
    const [open, setOpen] = useState(false);
  return (
    <setOpenSlideContext.Provider value={setOpen}>
    <OpenSlideContext.Provider value={open}>
        {children}
    </OpenSlideContext.Provider>
    </setOpenSlideContext.Provider>
  )
}

export  const useOpenSlide =()=>{
    return useContext(OpenSlideContext)
}

export  const useSetOpenSlide =()=>{
    return useContext(setOpenSlideContext)
}
