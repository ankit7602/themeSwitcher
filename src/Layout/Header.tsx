import React from "react"
import "./header.scss";
import SwictherSvg from "../assets/SwitcherSvg.svg";
interface SwitchProps {
    themeMode: string,
    onUpdateTheme: (val: string) => void;
}
const Header: React.FC<SwitchProps> = ({ themeMode, onUpdateTheme }) => {
    return (
        <React.Fragment>
            <div className="header_container">
                <h2 className="heading_head">Where in the world?</h2>
                <div className="button_container_head" onClick={() => onUpdateTheme(themeMode === "light" ? "dark" : "light")}>
                    <img src={SwictherSvg} />
                    {themeMode === "light" ? "Dark Mode" : "Light Mode"}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header