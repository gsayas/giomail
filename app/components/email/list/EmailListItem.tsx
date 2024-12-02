import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import type {Email} from "~/lib/types";
import Excerpt from "~/components/email/list/Excerpt";

interface EmailListItemProps {
    email: Email;
}

const unreadIcon = () => {
    return (
        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
    )
}

export default function EmailListItem({ email }: EmailListItemProps) {
    return (
        <div className={`email-list-item p-4 border-b border-gray-200`} role="listitem">
            <Card>
                <CardHeader>
                    <CardTitle>{!email.read && unreadIcon()}{email.subject}</CardTitle>
                    {email.sender}
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <Excerpt text={email.body} maxLength={20} />
                    </CardDescription>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    );
}