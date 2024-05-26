import React, { ChangeEvent, useState } from "react"
import SearchIcon from "../../assets/SearchSvg.svg";
import "./index.scss";
import { useDebounceFunction } from "../../CommonFunctions/debounce";

interface SearchInputProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchQuery }) => {
    const [searchTerm, setSearchTerm] = useState(String)
    const debounce = useDebounceFunction(
        (callback: () => void) => callback(),
        1000
    );
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value)
        debounce(() => setSearchQuery(e.target.value));
    };
    return (
        <React.Fragment>
            <div className="search_box">
                <img src={SearchIcon} className="searchIcon" height={18} width={18} />
                <input type="search"
                    placeholder="Search for a country…"
                    className="search_input"
                    value={searchTerm}
                    onChange={handleChange} />
            </div>
        </React.Fragment>
    )
}
export default SearchInput