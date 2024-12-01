import React, { useState } from "react";
import EmailListItem from "./EmailListItem";
import { Email } from '@prisma/client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";

export default function EmailList({ emails }: { emails: Email[] }) {
    const [selectedTab, setSelectedTab] = useState<string>('all');

    const unreadEmails = emails.filter(email => !email.read);

    const renderEmails = (emailsToRender: Email[]) => (
        emailsToRender && emailsToRender.map((email) => (
            <EmailListItem key={email.id} email={email} />
        ))
    );

    return (
        <div className="email-list">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                    <TabsTrigger value="all">All mail</TabsTrigger>
                    <TabsTrigger value="unread">Unread</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    {renderEmails(emails)}
                </TabsContent>
                <TabsContent value="unread">
                    {renderEmails(unreadEmails)}
                </TabsContent>
            </Tabs>
        </div>
    );
}