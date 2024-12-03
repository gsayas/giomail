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
import {Badge} from "~/components/ui/badge";

interface EmailListItemProps {
    email: Email;
    onEmailUpdate: (updatedEmail: Email) => void;
}

const unreadIcon = () => {
    return (
        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
    )
}

export default function EmailListItem({ email, onEmailUpdate }: EmailListItemProps) {

    const removeTag = async (tagId: number) => {
        const response = await fetch("/email/tag/remove", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailId: email.id, tagId }),
        });

        if (response.ok) {
            const result = await response.json();
            onEmailUpdate(result.email);
        }
    };

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
                    <div className="tags">
                        {email.tags && email.tags.map((tag) => (
                            <Badge key={tag.id} onClick={() => removeTag(tag.id)}>
                                {tag.name}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}