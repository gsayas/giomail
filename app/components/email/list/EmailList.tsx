import React, { useState, useEffect } from "react";
import EmailListItem from "./EmailListItem";
import EmailDetail from "~/components/email/detail/EmailDetail";
import type { Email } from "~/lib/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";

export default function EmailList({ emails }: { emails: Email[] }) {
    const [selectedTab, setSelectedTab] = useState<string>('all');
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
    const [emailList, setEmailList] = useState<Email[]>(emails);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (selectedEmail && !selectedEmail.read) {
            timer = setTimeout(async () => {
                setSelectedEmail(prev => prev ? { ...prev, read: true } : null);

                // Call the API to update the email's read status in the backend
                const response = await fetch("/email/read", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ emailId: selectedEmail.id }),
                });

                if (response.ok) {
                    const result = await response.json();
                    handleEmailUpdate(result.email);
                }
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [selectedEmail]);

    const handleEmailUpdate = (updatedEmail: Email) => {
        setEmailList(prevEmails => prevEmails.map(email => email.id === updatedEmail.id ? updatedEmail : email));
        if (selectedEmail && selectedEmail.id === updatedEmail.id) {
            setSelectedEmail(updatedEmail);
        }
        if(selectedEmail && selectedEmail.read !== updatedEmail.read && !updatedEmail.read) {
            setSelectedEmail(null);
        }
    };

    const getUnreadEmails = () => {
        return emailList.filter(email => !email.read);
    }

    const renderEmails = (filterUnread: boolean) => {
        const emailsToRender = filterUnread ? getUnreadEmails() : emailList;
        return emailsToRender && emailsToRender.map((email) => (
            <div key={email.id} onClick={() => setSelectedEmail(email)}>
                <EmailListItem email={email} onEmailUpdate={handleEmailUpdate}/>
            </div>
        ));
    }

    return (
        <div className="email-list-container flex w-full gap-3" >
            <div className="email-list w-2/5">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                    <TabsList>
                        <TabsTrigger value="all">All mail</TabsTrigger>
                        <TabsTrigger value="unread">Unread</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {renderEmails(false)}
                    </TabsContent>
                    <TabsContent value="unread">
                        {renderEmails(true)}
                    </TabsContent>
                </Tabs>
            </div>
            <div className="email-detail w-3/5">
                {selectedEmail && <EmailDetail email={selectedEmail} onEmailUpdate={handleEmailUpdate} />}
            </div>
        </div>
    );
}