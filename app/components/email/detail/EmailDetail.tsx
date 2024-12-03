import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import type { Email } from "~/lib/types";
import { MailQuestion } from "lucide-react";

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
        <div className="email-list-item p-4 border-b border-gray-200" role="listitem">
            <button onClick={markAsUnread}>
                <MailQuestion />
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
                    <div className="add-tag">
                        <input
                            type="text"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            placeholder="Add a tag"
                        />
                        <button onClick={addTag}>Add</button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}