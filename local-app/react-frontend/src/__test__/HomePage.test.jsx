import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
const mockAxios = new MockAdapter(axios);

import HomePage from '../Views/HomePage';




describe('Home Page tests', () => {

    //NOTE: these tests have shared DOM, not sure what the scope on this is.
    
    test('Correctly render home page', async () => {
        mockAxios.onGet('http://localhost:3002/api/products/get-all').reply(200, []);
        render(<HomePage />);
        expect(screen.getByTestId('home-message')).toBeDefined();
        mockAxios.reset();
    });


    test('Correctly render products on home page', async () => {
        mockAxios.onGet('http://localhost:3002/api/products/get-all').reply(200, [
            {
              id: 1,
              name: 'saw',
              amount_in_stock: 10,
            },
        ]); 

        render(<HomePage />);

        await waitFor(() => {
            expect(screen.getByTestId('product-1')).toBeDefined();
        });

        mockAxios.reset();

    });

    
});
