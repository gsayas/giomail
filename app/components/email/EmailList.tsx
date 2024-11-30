import React from "react";
import EmailListItem from "./EmailListItem";

const emails = [
    { id: 1, subject: "Welcome to GioMail", sender: "admin@giomail.com", body: "Welcome to GioMail! We are excited to have you on board.", tags: [] },
    { id: 2, subject: "Your first email", sender: "user@giomail.com", body: "This is your first email. Enjoy!", tags: ["important", "work"] },
    // Add more emails here
];

export default function EmailList() {
    return (
        <div className="email-list">
            {emails.map((email) => (
                <EmailListItem key={email.id} email={email} />
            ))}
        </div>
    );
}