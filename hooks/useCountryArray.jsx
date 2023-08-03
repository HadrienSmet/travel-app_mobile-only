import { useMemo } from "react";
import countryList from "react-select-country-list";

export const useCountryArray = () => {
    const options = useMemo(() => countryList().getData(), []);
    const fillCountryArray = () => {
        let countries = [];
        for (let i = 0; i < options.length; i++) {
            countries.push(options[i].label);
        }
        return countries;
    };
    const countriesArray = fillCountryArray();
    return { countriesArray };
};
