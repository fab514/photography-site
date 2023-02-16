/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Contact from './index';
import React from "react";

describe('Contact Page', () => {
    render(<Contact />)
    it('renders contact page', () => {
        expect(screen.getByText('This is the Contact Section!')).toBeTruthy();
    })
})