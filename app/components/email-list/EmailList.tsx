import React, { useState, useEffect } from "react";
import EmailListItem from "./EmailListItem";
import EmailDetail from "../email-detail/EmailDetail";
import { Email } from "@prisma/client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";

export default function EmailList({ emails }: { emails: Email[] }) {
    const [selectedTab, setSelectedTab] = useState<string>('all');
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

    const unreadEmails = emails.filter(email => !email.read);

    useEffect(() => {
        const currentEmails = selectedTab === 'all' ? emails : unreadEmails;
        if (selectedEmail && !currentEmails.some(email => email.id === selectedEmail.id)) {
            setSelectedEmail(null);
        }
    }, [selectedTab, emails, unreadEmails, selectedEmail]);

    const renderEmails = (emailsToRender: Email[]) => (
        emailsToRender && emailsToRender.map((email) => (
            <div key={email.id} onClick={() => setSelectedEmail(email)}>
                <EmailListItem email={email} />
            </div>
        ))
    );

    return (
        <div className="email-list-container flex">
            <div className="email-list w-1/2">
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
            <div className="email-detail w-1/2">
                {selectedEmail && <EmailDetail email={selectedEmail} />}
            </div>
        </div>
    );
}