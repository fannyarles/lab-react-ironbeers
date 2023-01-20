import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">Lab IronBeers</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={ { "--bs-scroll-height": "100px" } } >
                        <li className="nav-item">
                            <NavLink to='/all' className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } aria-current="page">All Beers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/random' className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } aria-current="page">Random Beer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } aria-current="page">Add a Beer</NavLink>
                        </li>
                    </ul>
                    <form method="GET" action="/search" className="d-flex">
                        <input className="form-control me-2" type="search" id="s" name="s" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;