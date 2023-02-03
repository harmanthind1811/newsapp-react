import React, { useState } from "react";

type CountryType={
    country:string,
    countrySetter:(country:string)=>void
}

const CountryContext = React.createContext<CountryType>({country:'us', countrySetter:()=>{}});

export default CountryContext;

export const CountryContextProvider = (props:{children:React.ReactNode})=>{

const [country, setCountry]= useState<string>('us')

const countrySetter=(country:string)=>{
    setCountry(country)
}

    return (
        <CountryContext.Provider value={{country, countrySetter}}>
            {props.children}
        </CountryContext.Provider>
    )
}

