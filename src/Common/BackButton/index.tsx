import React from "react"
import Backbutton from "../../assets/BackButton.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="back_button" onClick={() => navigate("/")}>
                <img src={Backbutton} height={13.33} width={13.33} />
                Back
            </div>
        </React.Fragment>
    )
}
export default BackButton