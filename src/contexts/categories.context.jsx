import { useState, createContext, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap:{}

});

export const CategoriesProvider = ({children}) =>{

    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(()=>{
    //     console.log(SHOP_DATA);
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(()=>{
        const getCategoriesMap = async() => {

            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, [])

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}