import { useEffect, useState } from "react";
import axios from 'axios';
import BeerFullDetails from "../components/BeerFullDetails";
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

function RandomBeer(props) {

    const [ beerData, setBeerData ] = useState(null);

    useEffect(() => {
        axios.get(`${apiBaseUrl}/random`).then(response => setBeerData(response.data));
    }, [])

    if ( !beerData ) return <p>Loading...</p>;

    return (
        <>
            <BeerFullDetails beerData={ beerData } />
        </>
    );
}

export default RandomBeer;