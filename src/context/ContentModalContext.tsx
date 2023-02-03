import React, { useState } from "react";

type Datatype = {
    source:{ id:string, name:string},
    author: string | object ,
    title:string,
    description:string,
    url:string,
    urlToImage: string,
    publishedAt:string,
    content:string}  


type ModalDatatype = {
    modalData: Datatype | undefined,
    ModalDataSetter:(modalData:Datatype)=>void
}

const ContentModalContext = React.createContext<ModalDatatype>({
    modalData:{
        source:{ id:"", name:""},
        author: "",
        title:"",
        description:"",
        url:"",
        urlToImage: "",
        publishedAt:"",
        content:""},
    ModalDataSetter:()=>{}
});

export default ContentModalContext;

export const ContentModalContextProvider = (props:{children:React.ReactNode})=>{

    const [modalData, setModalData]= useState<Datatype | undefined>()
    
    const ModalDataSetter=(modalData:Datatype | undefined)=>{
        setModalData(modalData)
    }
    
        return (
            <ContentModalContext.Provider value={{modalData, ModalDataSetter}}>
                {props.children}
            </ContentModalContext.Provider>
        )
    }
