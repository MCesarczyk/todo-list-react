import { useState, useEffect } from "react";

export const useLanguage = () => {

    const [language, setLanguage] = useState(localStorage.getItem("language") || 0);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return [language, setLanguage];
}