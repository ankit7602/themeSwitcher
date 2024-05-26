import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import useTheme from "../CustomHooks/useTheme";

interface LayoutProps {
    children: ReactNode;
}
interface Theme {
    colorprimary: string;
    colorsecondary: string;
    colortertiary: string;
    colorquarterniary: string;
}

const Layout = ({ children }: LayoutProps) => {
    const [themeMode, setThemeMode] = useState("light")
    const [theme] = useTheme(themeMode)
    useEffect(() => {
        // get the root elements
        const root: HTMLElement | null = document.getElementById("root");
        if (theme) {
            for (const globalcssitem in theme) {
                root?.style.setProperty(`--${globalcssitem}`, theme[globalcssitem as keyof Theme]);
            }

        }
    }, [theme])
    return (
        <React.Fragment>
            <Header themeMode={themeMode} onUpdateTheme={(val: string) => setThemeMode(val)} />
            {children}
        </React.Fragment>
    );
};

export default Layout;