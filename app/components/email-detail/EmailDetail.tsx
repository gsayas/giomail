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

interface EmailListItemProps {
    email: Email;
}

export default function EmailListItem({ email }: EmailListItemProps) {
    return (
        <div className="email-list-item p-4 border-b border-gray-200" role="listitem">
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