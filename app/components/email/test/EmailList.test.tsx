import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailList from '~/components/email/EmailList';
import { Email } from '@prisma/client';

const mockEmails: Email[] = [
    { id: 1, subject: 'Test Email 1', body: 'Test Email 1 Body', sender: 'Grandpa Joe', read: false },
    { id: 2, subject: 'Test Email 2', body: 'Test Email 2 Body', sender: 'Grandma Josephine', read: true },
];

test('renders email list', () => {
    render(<EmailList emails={mockEmails} />);

    const emailItems = screen.getAllByRole('listitem');
    expect(emailItems).toHaveLength(mockEmails.length);

    mockEmails.forEach((email) => {
        expect(screen.getByText(email.subject)).toBeInTheDocument();
    });
});

test('filters unread emails', () => {
    render(<EmailList emails={mockEmails} />);

    const unreadTab = screen.getByText('Unread');
    fireEvent.mouseDown(unreadTab);

    expect(screen.getByText('Test Email 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Email 2')).not.toBeInTheDocument();
});