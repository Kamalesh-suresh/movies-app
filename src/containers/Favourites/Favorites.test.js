import {render,screen,} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// import {createMemoryHistory} from 'history';


import Favorites from './Favorites';

const MockRouter=()=>{
    // const history=createMemoryHistory();
    return(
        <BrowserRouter>
            <Favorites/>
        </BrowserRouter>
    );
   
};

// const renderWithRouter = (component) => {
//     const history = createMemoryHistory()
//     return { 
//     ...render (
//     <BrowserRouter history={history}>
//         {component}
//     </BrowserRouter>
//     )
//   }
// }

// eslint-disable-next-line no-undef
describe('Favorites',()=>{
    // eslint-disable-next-line no-undef
    test('renders fav heading', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('This is Favorites Pages');
        // eslint-disable-next-line no-undef
        expect(linkElement).toBeInTheDocument();
    
    });
    
    // eslint-disable-next-line no-undef
   

});