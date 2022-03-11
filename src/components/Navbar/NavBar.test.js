import {render,screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';

const MockRouter=()=>{
    return(
        <BrowserRouter>
            <NavBar/>
        </BrowserRouter>
    );
   
};

// eslint-disable-next-line no-undef
describe('Navbar',()=>{
    // eslint-disable-next-line no-undef
    test('renders movie logo', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('Movies');
        // eslint-disable-next-line no-undef
        expect(linkElement).toBeInTheDocument();
    
    });
    
    // eslint-disable-next-line no-undef
    it('renders button', ()=>{
        render(
            <MockRouter/>
        );
        const buttonElements=screen.getAllByTestId('button');
        // eslint-disable-next-line no-undef
        expect(buttonElements.length).toBe(1);
    
    });
});
// eslint-disable-next-line no-undef


