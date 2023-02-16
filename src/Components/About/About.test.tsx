/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import About from './index';
import React from "react";

describe('About Page', () => {
    render(<About />)
    it('renders about page', () => {
        expect(screen.getByText('This is the About Section!')).toBeTruthy();
    })
})