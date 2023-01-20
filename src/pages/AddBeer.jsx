import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const apiBaseUrl = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeer() {

    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ tagline, setTagline ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ firstBrewed, setFirstBrewed ] = useState('');
    const [ brewerTips, setBrewerTips ] = useState('');
    const [ attenuationLevel , setAttenuationLevel ] = useState(0);
    const [ contributedBy , setContributedBy ] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        const newBeer = { name, tagline, description, first_brewed: firstBrewed, brewer_tips: brewerTips, attenuation_level: Number(attenuationLevel), contibuted_by: contributedBy };
        axios.post(`${ apiBaseUrl }/new`, newBeer);
        setName(''); setTagline(''); setDescription(''); setFirstBrewed(''); setBrewerTips(''); setAttenuationLevel(0); setContributedBy('');
        navigate(`/`);
    }

    return (
        <>
            <form onSubmit={ handleSubmit } className="text-start mb-5">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="Name" className="form-control" />
                
                <label htmlFor="tagline" className="form-label mt-4">Tagline</label>
                <input type="text" name="tagline" value={ tagline } onChange={ (e) => setTagline(e.target.value) } placeholder="Tagline" className="form-control" />
                
                <label htmlFor="description" className="form-label mt-4">Description</label>
                <textarea name="description" value={ description } onChange={ (e) => setDescription(e.target.value) } placeholder="Description" className="form-control"></textarea>
                
                <label htmlFor="firstBrewed" className="form-label mt-4">First brewed</label>
                <input type="text" name="firstBrewed" value={ firstBrewed } onChange={ (e) => setFirstBrewed(e.target.value) } placeholder="First brewed" className="form-control" />
                
                <label htmlFor="brewerTips" className="form-label mt-4">Brewer tips</label>
                <input type="text" name="brewerTips" value={ brewerTips } onChange={ (e) => setBrewerTips(e.target.value) } placeholder="Brewer tips" className="form-control" />
                
                <label htmlFor="attenuationLevel" className="form-label mt-4">Attenuation level</label>
                <input type="number" name="attenuationLevel" value={ attenuationLevel } onChange={ (e) => setAttenuationLevel(e.target.value) } placeholder="Attenuation level" className="form-control" />
                
                <label htmlFor="contributedBy" className="form-label mt-4">Contributed by</label>
                <input type="text" name="contributedBy" value={ contributedBy } onChange={ (e) => setContributedBy(e.target.value) } placeholder="Contributed by" className="form-control" />

                <input type="submit" className="btn btn-primary mt-4" value="Add Beer" />
            </form>
        </>
    )
}

export default AddBeer;