import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
const mockAxios = new MockAdapter(axios);

import ProductsPage from '../Views/ProductsPage';

//need to ensure all inidivual functions I call inside my code are also tested
describe('Products page tests', () => {

    test('should be on the products page', async () => {
        mockAxios.onGet('http://localhost:3002/api/products/get-all').reply(200, []);

        render(<ProductsPage />);

        expect(screen.getByText('Product list')).toBeDefined();

        mockAxios.reset();

    });

    test('should display the products properly', async () => {
        mockAxios.onGet('http://localhost:3002/api/products/get-all').reply(200, [
            {
                id: 1,
                name: 'saw',
                amount_in_stock: 10,
            },
            {
                id: 2,
                name: 'hammer',
                amount_in_stock: 1
            }
        ]);

        render(<ProductsPage />);

        await waitFor(() => {
            expect(screen.getByTestId('product-2')).toBeDefined();
        });

        mockAxios.reset();
    });

    // test('should not display admin buttons if not admin', async () => {
        
    //     mockAxios.onGet('http://localhost:3002/api/users/2').reply([
    //         {
    //             id: 2,
    //             name: 'peter',
    //             is_admin: 0
    //         }    
    //     ]);

    //     render(<ProductsPage />);

    //     await waitFor(() => {
    //         expect(screen.getByTestId('product-name-input')).toBeUndefined();
    //     });

    //     mockAxios.reset();
    // });


    test('should display admin buttons if user is admin', async () => {

        
        mockAxios.onGet('http://localhost:3002/api/products/get-all').reply(200, []);

        mockAxios.onGet('http://localhost:3002/api/users/1').reply(200, [
            {
                username: 'asdf',
                is_admin: 1
            }
        ]);


        render(<ProductsPage />);

        localStorage.setItem('user_id', 1);

        await waitFor(() => {
            expect(screen.getByTestId('add-product-submit')).toBeDefined();
        });

        mockAxios.reset();
    });


    //TODO: implement - mock the functions? idk how to get started with this
    // vi.fn(), fireEvent
    // test('New item should be displayed if submitted via admin panel', async () => {
    //     mockAxios.onGet('http://localhost:3002/api/products/get-all').reply(200, [
    //         {
    //             id: 1,
    //             name: 'saw', 
    //             amount_in_stock: 10
    //         }
    //     ]);

    //     mockAxios.onGet('http://localhost:3002/api/users/1').reply(200, [
    //         {
    //             username: 'asdf',
    //             is_admin: 1
    //         }
    //     ]);


    //     render(<ProductsPage />);


    // })
});