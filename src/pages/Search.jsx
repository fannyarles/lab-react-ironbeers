import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BeerInfos from "../components/BeerInfos";
import axios from 'axios';

function Search() {

    const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

    const [ filteredBeers, setFilteredBeers ] = useState(null);
    const [searchParams, setSearchParams ] = useSearchParams();
    const s = searchParams.get('s');

    useEffect(() => {
        axios.get(`${ apiBaseUrl }`)
            .then(response => {
                const data = response.data;
                const filteredList = data.filter(el => el.name.toLowerCase().includes(s.toLowerCase()));
                return setFilteredBeers(filteredList);
            });
    }, [s])

    if ( !filteredBeers ) return <p>Loading...</p>

    return(
        <>
            { filteredBeers.map(beer => <BeerInfos beerData={ beer } key={ beer._id } />)}
        </>
    )

}

export default Search;