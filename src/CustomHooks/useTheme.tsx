import { useEffect, useState } from "react";

interface Theme {
    colorprimary: string;
    colorsecondary: string;
    colortertiary: string;
    colorquarterniary: string
}
// colorprimary: whiteColor
// colorsecondary: textcolor,
// colortertiary: headerbackground,
// colorquaternary: "rgba(33, 33, 33, 1)",
// colorpenitentiary: "rgba(255, 255, 255, 1)",
// colorhexa: "rgba(255, 255, 255, 1)"
const useTheme = (themeType: string) => {
    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        const lightTheme: Theme = {
            colorprimary: "hsla(200, 15%, 8%, 1)",
            colorsecondary: "hsla(0, 0%, 100%, 1)",
            colortertiary: "hsla(0, 0%, 100%, 1)",
            colorquarterniary: 'hsla(0, 0%, 77%, 1)'
        };

        const darkTheme: Theme = {
            colorprimary: "hsla(0, 0%, 100%, 1)",
            colorsecondary: "hsla(209, 23%, 22%, 1)",
            colortertiary: "hsla(207, 26%, 17%, 1)",
            colorquarterniary: "hsla(0, 0%, 100%, 1)"
        };

        if (themeType === "light") {
            setTheme(lightTheme);
        } else {
            setTheme(darkTheme);
        }
    }, [themeType]);

    return [theme];
};

export default useTheme;
