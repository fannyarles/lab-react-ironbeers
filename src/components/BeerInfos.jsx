function BeerInfos(props) {

    const { beerData } = props;

    return (
        <div className="border-bottom p-5 d-flex" onClick={ () => window.location = `/beer/${ beerData._id }` }>
            <img src={ beerData.image_url } className="img-fluid rounded-start me-5" alt={ beerData.name } style={ { maxWidth: '50px', height: 'auto' } } />
            <div className="text-start">
                <h5 className="mb-2">{ beerData.name }</h5>
                <h6 className="fw-lighter fst-italic lh-base">{ beerData.tagline }</h6>
                <p className="fs-6 text">{ beerData.contributed_by }</p>
            </div>
        </div>
    )

}

export default BeerInfos;