import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import BeerFullDetails from "../components/BeerFullDetails";
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

function SingleBeer() {

    const [ beerData, setBeerData ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${ apiBaseUrl }/${ id }`).then(response => setBeerData(response.data));
    });

    if ( !beerData ) return <p>Loading...</p>;

    return (
        <>
            <BeerFullDetails beerData={ beerData } />
        </>
    );
}

export default SingleBeer;