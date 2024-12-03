import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/tooltip"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import type { Email } from "~/lib/types";
import MailUnreadLineIcon from 'remixicon-react/MailUnreadLineIcon';

interface EmailDetailProps {
    email: Email;
    onEmailUpdate: (updatedEmail: Email) => void;
}

export default function EmailDetail({ email, onEmailUpdate }: EmailDetailProps) {
    const [newTag, setNewTag] = useState("");

    const markAsUnread = async () => {
        const response = await fetch("/email/unread", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailId: email.id }),
        });

        if (response.ok) {
            const result = await response.json();
            onEmailUpdate(result.email);
        }
    };

    const addTag = async () => {
        const response = await fetch("/email/tag/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailId: email.id, tagName: newTag }),
        });

        if (response.ok) {
            const result = await response.json();
            onEmailUpdate(result.email);
            setNewTag("");
        }
    };

    return (
        <div className="email-detail mt-5">
            <TooltipProvider delayDuration={300} >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button onClick={markAsUnread} title={'Mark as unread'}>
                            <MailUnreadLineIcon/>
                        </button>
                    </TooltipTrigger>
                    <TooltipContent align={'start'}>
                        <p>Mark as unread</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Card>
                <CardHeader>
                    <CardTitle>Subject: {email.subject}</CardTitle>
                    From: {email.sender}
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        {email.body}
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="add-tag flex gap-1">
                        <Input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="i.e: work" />
                        <Button onClick={addTag}>Add tag</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}