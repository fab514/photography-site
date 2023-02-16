/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Details from './index';
import React from "react";

describe('Details Page', () => {
    render(<Details />)
    it('renders details page', () => {
        expect(screen.getByText('This is the Details Section!')).toBeTruthy();
    })
})