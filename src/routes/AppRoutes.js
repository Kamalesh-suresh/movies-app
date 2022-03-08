import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import HomePage from '../containers/Homepage/HomePage';
import Contact from '../containers/Contact/Contact';
import Favorites from '../containers/Favourites/Favorites';



const AppRoutes=()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/favorites"  element={<Favorites/>}/>
                    <Route path="/contact"  element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default AppRoutes;