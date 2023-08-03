import { useMemo } from "react";

export const useAgeArray = () => {
    const fillAgeArray = () => {
        let options = [];
        for (let i = 16; i < 101; i++) {
            options.push({ key: i, value: i });
        }
        return options;
    };
    const ageArray = useMemo(() => fillAgeArray(), []);

    return { ageArray };
};
