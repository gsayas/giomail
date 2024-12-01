import React from "react";
import EmailListItem from "./EmailListItem";
import { Email } from '@prisma/client'

export default function EmailList({ emails }: { emails: Email[] }) {
    return (
        <div className="email-list">
            {emails && emails.map((email) => (
                <EmailListItem key={email.id} email={email} />
            ))}
        </div>
    );
}