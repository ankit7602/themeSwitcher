import React, { createContext, useEffect, useState } from "react"
import SearchInput from "../../Common/SearchInput";
import "./index.scss";
import FilterDropdown from "../../Common/FilterDropdown";
import Card from "../../Common/Card";
import { Country, get } from "../../CommonFunctions/RestCountriesApi";
import Loading from "../../Common/Loading";

interface CountryContextType {
    countries: Country[];
}


export const countryContext = createContext<CountryContextType | undefined>(undefined);

const Home = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [AllCountries, setAllCountries] = useState<Country[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                let endpoint = '/all';
                if (selectedRegion) {
                    endpoint = `/region/${selectedRegion}`;
                } else if (searchQuery.trim() !== '') {
                    endpoint = `/name/${searchQuery}`;
                }
                const response = await get<Country[]>(endpoint);
                setLoading(false)
                setCountries(response);
            } catch (error) {
                setLoading(false)
                setCountries([])
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchQuery, selectedRegion]);


    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await get<Country[]>('/all');
                setLoading(false)
                setAllCountries(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <section className="home_section">
                <div className="container">
                    <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <countryContext.Provider value={{ countries: AllCountries }}>
                        <FilterDropdown selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
                    </countryContext.Provider>

                </div>
                {loading ? <Loading text="Loading..." /> :
                    countries && countries?.length ? <div className="countries_listing">
                        {
                            countries?.map((item, i) => {
                                return (
                                    <React.Fragment key={i} >
                                        <Card country={item} />
                                    </React.Fragment >
                                );
                            })


                        }
                    </div> : <Loading text={"No countries found."} />}
            </section>
        </React.Fragment>
    )
}
export default Home