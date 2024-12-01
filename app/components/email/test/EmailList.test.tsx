import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailList from '~/components/email/EmailList';
import { Email } from '@prisma/client';

const mockEmails: Email[] = [
    { id: 1, subject: 'Test Email 1', body: 'Test Email 1 Body', sender: 'Grandpa Joe' },
    { id: 2, subject: 'Test Email 2', body: 'Test Email 2 Body', sender: 'Grandma Josephine' },
];

test('renders email list', () => {
    render(<EmailList emails={mockEmails} />);

    const emailItems = screen.getAllByRole('listitem');
    expect(emailItems).toHaveLength(mockEmails.length);

    mockEmails.forEach((email) => {
        expect(screen.getByText(email.subject)).toBeInTheDocument();
    });
});