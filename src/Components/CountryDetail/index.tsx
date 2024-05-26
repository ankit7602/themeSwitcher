import React, { useEffect, useMemo, useState } from "react"
import BackButton from "../../Common/BackButton";
import "./index.scss";
import dummyImg from "../../assets/dummyFlag.png";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../CommonFunctions/RestCountriesApi";
import Loading from "../../Common/Loading";
interface CountryDetails {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    flags: {
        png: string;
        svg: string;
    };
    tld: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
    cca3: string,
    borders: string[];
}


const CountryDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [country, setCountry] = useState<CountryDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await get<CountryDetails[]>(`/alpha/${id}`);
                if (response && response.length > 0) {
                    setLoading(false)
                    setCountry(response[0]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);
    const borderCountry = (border: string) => {
        navigate(`/country-detail/${border}`)
    }
    const currency = useMemo(() => {
        if (country?.currencies) {
            const currencyKey = Object.keys(country.currencies)[0];
            const currency = country.currencies[currencyKey];
            return `${currency.name} ${currency.symbol}`;
        }
        return '';
    }, [country]);

    const languages = useMemo(() => {
        if (country?.languages) {
            return Object.values(country.languages).join(', ');
        }
        return '';
    }, [country]);
    return (
        <React.Fragment>
            <section className="section">
                <BackButton />
                {loading ? <Loading text="Loading..." /> : <div className="country_details_section">
                    <img src={country?.flags?.png || dummyImg}
                        alt={`Flag of ${country?.name?.common}`} className="image" />
                    <div>
                        <p className="country_name">{country?.name?.common}</p>
                        <div className="details_section">
                            <div className="heading">
                                <p>Native Name: <span className="description">{country?.name?.nativeName?.ron?.common || country?.name?.official}</span></p>
                                <p>Population: <span className="description">{country?.population}</span></p>
                                <p>Region: <span className="description">{country?.region}</span></p>
                                <p>Sub Region: <span className="description">{country?.subregion}</span></p>
                                <p>Capital: <span className="description">{country?.capital[0]}</span></p>
                            </div>
                            <div className="heading">
                                <p>Top Level Domain: <span className="description">{country?.tld[0]}</span></p>
                                <p>Currencies: <span className="description">{currency}</span></p>
                                <p>Languages: <span className="description">{languages}</span></p>
                            </div>
                        </div>
                        <div className="border_countries_section">
                            <p className="heading">Border Countries: </p>
                            <div className="box">
                                {country?.borders?.length && country?.borders?.map((item, i) => {
                                    return (
                                        <p className="title" key={i} onClick={() => borderCountry(item)} >{item}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
            </section>
        </React.Fragment>
    )
}
export default CountryDetail