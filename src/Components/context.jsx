import React, { useContext, useEffect } from "react";
const AppContext=React.createContext();
// 
const API_URL = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";

const AppProvider=({children})=>{
   const getBooks=async(url)=>{
    try{
     const res=await fetch(url);
     const data=res.json();
     console.log("data:",data);
    }catch(error){
        console.log(error);
    }
   }
    useEffect(()=>{
        getBooks(API_URL);
    },[]);
return <AppContext.Provider value="Aksha">{children}</AppContext.Provider>
};
 const useGlobalContext=()=>{
    return useContext(AppContext);
 }
export {AppContext, AppProvider,useGlobalContext};