import React from "react";
import "./index.scss";
import dummyFlag from "../../assets/dummyFlag.png";
import { useNavigate } from "react-router-dom";
import { Country } from "../../CommonFunctions/RestCountriesApi";

// Define the props for the Card component
interface CardProps {
    country: Country;
}

const Card: React.FC<CardProps> = ({ country }) => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="card_container" onClick={() => navigate(`/country-detail/${country?.cca3}`)}>
                <img src={country?.flags?.png || dummyFlag} alt={`Flag of ${country?.name?.common}`}
                    width={264} height={160} className="flag_img" />
                <div className="card_details">
                    <p className="country">{country?.name?.common}</p>
                    <div className="country_details">
                        <p className="detail">Population: <span className="otherDetail">{country?.population}</span></p>
                        <p className="detail">Region: <span className="otherDetail">{country?.region}</span></p>
                        <p className="detail">Capital: <span className="otherDetail">{country?.capital?.join(', ')}</span></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Card;