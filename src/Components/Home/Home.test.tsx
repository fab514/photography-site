/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Home from './index';
import React from "react";

describe('Home Page', () => {
    render(<Home />)
    it('renders home page', () => {
        expect(screen.getByText('This is the Home Section!')).toBeTruthy();
    })
}) 