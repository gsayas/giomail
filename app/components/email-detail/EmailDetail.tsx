import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Email } from '@prisma/client';

interface EmailDetailProps {
    email: Email;
}

export default function EmailDetail({ email }: EmailDetailProps) {
    const markAsUnread = async () => {
        await fetch("/mark-as-unread", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailId: email.id }),
        });
    };

    return (
        <div className="p-4 border-b border-gray-200">
            <button onClick={markAsUnread}>
                <span className="material-symbols-outlined" >
                mark_email_unread
            </span>
            </button>
            <Card>
                <CardHeader>
                    <CardTitle>{email.subject}</CardTitle>
                    {email.sender}
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        {email.body}
                    </CardDescription>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    );
}