import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailList from '~/components/email/list/EmailList';
import type {Email} from "~/domain/Email";

const mockEmails: Email[] = [
    { id: 1, subject: 'Test Email 1', body: 'Test Email 1 Body', sender: 'Grandpa Joe', read: false, tags: [] },
    { id: 2, subject: 'Test Email 2', body: 'Test Email 2 Body', sender: 'Grandma Josephine', read: true, tags: [] },
];

test('renders list list', () => {
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