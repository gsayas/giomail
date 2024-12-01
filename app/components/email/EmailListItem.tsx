import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"

interface Email {
    id: number;
    subject: string;
    // sender: string;
    // body: string;
    // tags: string[]; //TODO: Create a Tag type
}

interface EmailListItemProps {
    email: Email;
}

export default function EmailListItem({ email }: EmailListItemProps) {
    return (
        <div className="email-list-item p-4 border-b border-gray-200">
            <Card>
                <CardHeader>
                    <CardTitle>{email.subject}</CardTitle>
                    {email.subject}
                </CardHeader>
                <CardContent>
                    <CardDescription>{email.subject}</CardDescription>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>

        </div>
    );
}