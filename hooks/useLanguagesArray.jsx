import { useMemo } from "react";
import { languagesList } from "../data";

export const useLanguagesArray = () => {
    const languagesArray = useMemo(() => {
        const currentArray = [];
        languagesList.forEach((obj) => currentArray.push(obj.name));
        return currentArray;
    }, []);

    return { languagesArray };
};
