/* eslint-disable */


import {render,screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Contact from "./Contact";

const MockRouter=()=>{
    
    return(
        <BrowserRouter>
            <Contact/>
        </BrowserRouter>
    );
   
};

describe('contact',()=>{
    
    test('renders movie logo', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('Movies');
        
        expect(linkElement).toBeInTheDocument();
    
    });
    test('renders contactus text', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('Contact Us');
        
        expect(linkElement).toBeInTheDocument();
    
    });
    test('renders addrress', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('corporate office :');
        
        expect(linkElement).toBeInTheDocument();
    
    });

    test('renders email', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByText('psiog@outlook.com');
        
        expect(linkElement).toBeInTheDocument();
    
    });

    test('is video available', ()=>{
        render(
            <MockRouter/>
        );
        const linkElement=screen.getByTestId('psiogVideo');
        
        expect(linkElement).toBeInTheDocument();
    
    });




    
});