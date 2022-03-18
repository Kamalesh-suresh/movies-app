/* eslint-disable */


import {render,screen,} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';



import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Favorites from './Favorites';

const MockRouter=()=>{
 
    return(
        <BrowserRouter>
            <Favorites/>
        </BrowserRouter>
    );
   
};




describe('Favorites',()=>{

    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;
  
    test('navbar', ()=>{

        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <MockRouter/>
            </Provider>
            
        );
        const linkElement=screen.getByText('Movies');
             expect(linkElement).toBeInTheDocument();
    
    });

    test('renders fav heading', ()=>{

        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <MockRouter/>
            </Provider>
            
        );
        const linkElement=screen.getByText('Your Favorites');
              expect(linkElement).toBeInTheDocument();
    
    });

    test('renders no favorites', ()=>{

        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <MockRouter/>
            </Provider>
            
        );
        const linkElement=screen.getByText('No Favorites! please add');
              expect(linkElement).toBeInTheDocument();
    
    });

    
    
    
   

});