function BeerFullDetails(props) {

    const { beerData } = props;

    return (
        <>  
            <div className="mt-4">
                <img src={ beerData.image_url } alt={ beerData.name } style={ { maxHeight: "300px" } } className="mb-5" />
                <div className="d-flex justify-content-between">
                    <h2>{ beerData.name }</h2>
                    <p>{ beerData.attenuation_level }</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>{ beerData.tagline }</p>
                    <p>{ beerData.first_brewed }</p>
                </div>
                <div className="text-start">
                    <p>{ beerData.description }</p>
                    <p>{ beerData.contributed_by }</p>
                </div>
            </div>
        </>
    )

}

export default BeerFullDetails;