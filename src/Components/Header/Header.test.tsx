/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Header from './index';
import React from "react";

describe('Header Page', () => {
    render(<Header />)
    it('renders header page', () => {
        expect(screen.getByText('This is the Header Section!')).toBeTruthy();
    })
})