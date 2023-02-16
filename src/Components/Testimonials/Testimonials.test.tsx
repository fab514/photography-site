/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Testimonials from './index';
import React from "react";

describe('Testimonials Page', () => {
    render(<Testimonials />)
    it('renders testimonials page', () => {
        expect(screen.getByText('This is the Testimonials Section!')).toBeTruthy();
    })
})