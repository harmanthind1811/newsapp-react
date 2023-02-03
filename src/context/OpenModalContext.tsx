import React, { useState } from "react";

type ModalType={
    modal:any,
    modalSetter:(modal:HTMLDialogElement)=>void
}


const OpenModalContext = React.createContext<ModalType>({modal:null , modalSetter:()=>{}});

 export default OpenModalContext;

 export const OpenModalContextProvider = (props:{children:React.ReactNode})=>{

const [modal, setModal] = useState<HTMLDialogElement>(null!)

const modalSetter=(modal:HTMLDialogElement)=>{
    setModal(modal)
}

    return (
        <OpenModalContext.Provider value={{modal, modalSetter}}>
            {props.children}
        </OpenModalContext.Provider>
    )


 }
