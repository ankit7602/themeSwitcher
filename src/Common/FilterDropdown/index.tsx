import React, { useContext } from "react";
import "./index.scss";
import { countryContext } from "../../Components/Home";

interface FilterDropDownProps {
    selectedRegion: string;
    setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDropdown: React.FC<FilterDropDownProps> = ({ selectedRegion, setSelectedRegion }) => {

    const countryContextValue = useContext(countryContext);

    if (!countryContextValue) {
        return <div>Loading...</div>;
    }

    const { countries } = countryContextValue;

    return (
        <React.Fragment>
            <select className="filter_container"
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}>
                <option value={""}>Filter by Region</option>
                {countries?.length && countries.map((country, i) => {
                    return (
                        <option key={i} value={country?.region}>{country?.region}</option>
                    );
                })}
            </select>
        </React.Fragment>
    )
}
export default FilterDropdown;