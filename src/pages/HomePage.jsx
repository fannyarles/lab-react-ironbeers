import allBeersPic from '../assets/beers.png';
import addBeerPic from '../assets/new-beer.png';
import randomBeerPic from '../assets/random-beer.png';

function HomePage() {


    return(
        <>
            <div className="card mb-3">
                <img src={ allBeersPic } className="card-img-top" alt="All Beers" onClick={ () => window.location = '/all' } />
                <div className="card-body">
                    <h5 className="card-title">All Beers</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div className="card mb-3">
                <img src={ randomBeerPic } className="card-img-top" alt="Random Beer" onClick={ () => window.location = '/random' } />
                <div className="card-body">
                    <h5 className="card-title">Random Beer</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div className="card mb-3">
                <img src={ addBeerPic } className="card-img-top" alt="Add a Beer" onClick={ () => window.location = '/add' } />
                <div className="card-body">
                    <h5 className="card-title">Add a Beer</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </>
    )
}

export default HomePage;