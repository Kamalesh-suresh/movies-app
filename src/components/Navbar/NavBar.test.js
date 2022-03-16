/* eslint-disable */


import {render,screen,fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {createMemoryHistory} from 'history';


import NavBar from './NavBar';

const MockRouter=()=>{
    const history=createMemoryHistory();
    return(
        <BrowserRouter history={history}>
            <NavBar/>
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


describe('Navbar',()=>{
    
    test('renders movie logo', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('Movies');
        
        expect(linkElement).toBeInTheDocument();
    
    });
    

    it('renders home button', ()=>{
        render(
            <MockRouter/>
        );
        const buttonElements=screen.getAllByTestId('homeButton');
        
        expect(buttonElements).toHaveLength(1);
    
    });

    it('home button text', ()=>{
        render(
            <MockRouter/>
        );
        const buttonElement=screen.getByTestId('homeButton');
       
        expect(buttonElement).toHaveTextContent('Home');
    
    });

    it('click home button', ()=>{
        render(
            <MockRouter/>
        );
        const buttonElement=screen.getByTestId('homeButton');
      
        const linkElement=screen.getByText('Movies');
        fireEvent.click(buttonElement);
        expect(linkElement).toBeInTheDocument();
    
    });

    // it('click favorites button', async ()=>{
    //     render(
    //         <MockRouter/>
    //     );
    //     const buttonElement=screen.getByTestId('favoritesButton');
    //     // eslint-disable-next-line no-undef
        
    //      fireEvent.click(buttonElement);
    //      const linkElement= await screen.findByTestId('fav-heading');
    //      expect(linkElement).toBeInTheDocument()
    
    // });

    // it('should navigate to the about page',  ()=> {
    //     const { container, getByTestId } = renderWithRouter(<NavBar />) 
    //     fireEvent.click(getByTestId('favoritesButton'))
    //     expect(screen.innerHTML).toMatch('This is Favorites Pages')
    //   })

    
});



