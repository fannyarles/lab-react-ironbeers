import axios from "axios";
import { useEffect, useState } from "react";
import BeerInfos from "../components/BeerInfos";
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeers() {

    const [ beersDB, setBeersDB ] = useState(null);

    useEffect(() => {
        axios.get(`${apiBaseUrl}`).then(response => setBeersDB(response.data));
    }, [])

    if ( !beersDB ) return <p>Loading...</p>

    return (
        <>
            { beersDB.map(beer => <BeerInfos beerData={ beer } key={ beer._id } />)}
        </>
    )


}

export default AllBeers;