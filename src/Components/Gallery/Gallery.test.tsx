/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Gallery from './index';
import React from "react";

describe('Gallery Page', () => {
    render(<Gallery />)
    it('renders gallery page', () => {
        expect(screen.getByText('This is the Gallery Section!')).toBeTruthy();
    })
})