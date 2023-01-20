import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import AddBeer from './pages/AddBeer';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/all' element={ <AllBeers /> } />
                <Route path='/beer/:id' element={ <SingleBeer /> } />
                <Route path='/random' element={ <RandomBeer /> } />
                <Route path='/add' element={ <AddBeer /> } />
                <Route path='/search' element={ <Search /> } />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
