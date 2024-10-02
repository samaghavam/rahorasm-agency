import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../pages/login/Register'; // Adjust the import based on your directory structure
import useSignup from '../hooks/signUp/useSignUp';
import '@testing-library/jest-dom/extend-expect';

// Mock the useSignup hook
jest.mock('../hooks/signUp/useSignUp.js');

// Mock react-router-dom's useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Register Component', () => {
    beforeEach(() => {
        // Reset the mock calls before each test
        mockNavigate.mockClear();
        useSignup.mockReturnValue({
            signupUser: jest.fn(() => Promise.resolve()),
            success: false,
            errRef: React.createRef(),
        });
    });

    test('navigates to /loginTempcode on successful sign up', async () => {
        useSignup.mockReturnValue({
            signupUser: async () => {
                // Simulate successful signup
            },
            success: false,
            errRef: React.createRef(),
        });

        render(
            <Router>
                <Register />
            </Router>
        );

        fireEvent.change(screen.getByLabelText(/نام کاربری/i), {
            target: { value: 'validUser' },
        });
        fireEvent.change(screen.getByLabelText(/رمز عبور/i), {
            target: { value: 'ValidPassword1' },
        });
        fireEvent.change(screen.getByLabelText(/تکرار رمز عبور/i), {
            target: { value: 'ValidPassword1' },
        });

        fireEvent.click(screen.getByText(/ثبت نام/i));

        await waitFor(() => {
            // Wait for the function to complete and check if it navigated
            expect(mockNavigate).toHaveBeenCalledWith('/loginTempcode');
        });
    });
});
