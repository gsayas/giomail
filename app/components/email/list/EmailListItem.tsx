import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import type {Email} from "~/domain/Email";
import Excerpt from "~/components/email/list/Excerpt";
import {Badge} from "~/components/ui/badge";
import {UnreadIcon} from "~/components/ui/icons";

interface EmailListItemProps {
    email: Email;
    onEmailUpdate: (updatedEmail: Email) => void;
}

export default function EmailListItem({email, onEmailUpdate}: EmailListItemProps) {

    const removeTag = async (tagId: number) => {
        const response = await fetch("/email/tag/remove", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({emailId: email.id, tagId}),
        });

        if (response.ok) {
            const result = await response.json();
            onEmailUpdate(result.email);
        }
    };

    return (
        <div className={`email-list-item pt-2 cursor-pointer`} role="listitem">
            <Card>
                <CardHeader>
                    <CardTitle className={`flex gap-2`}>{email.subject}{!email.read && <UnreadIcon />}</CardTitle>
                    {email.sender}
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <Excerpt text={email.body} maxLength={20}/>
                    </CardDescription>
                </CardContent>
                <CardFooter className="tags flex gap-1 flex-wrap">
                    {email.tags && email.tags.map((tag) => (
                        <Badge key={tag.id} onClick={() => removeTag(tag.id)} className="cursor-pointer">
                            {tag.name}
                        </Badge>
                    ))}
                </CardFooter>
            </Card>
        </div>
    );
}