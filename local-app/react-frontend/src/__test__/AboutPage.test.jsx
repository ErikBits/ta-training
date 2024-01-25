import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import AboutPage from '../Views/AboutPage';

describe('About Page tests', () => {
    test('Correctly render about page', async () => {
        const { container } = render(<AboutPage />);
        
        expect(screen.getByTestId('about-text')).toBeDefined();;
    });
})
