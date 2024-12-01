import type {MetaFunction} from "@remix-run/node";
import {
    LoaderFunction
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {getEmails} from "~/lib/emails.server";
import EmailList from "~/components/email/EmailList";
import { Email } from '@prisma/client'


export const meta: MetaFunction = () => {
    return [
        {title: "GioMail"},
        {name: "description", content: "GioMail - A Simple Email Client"},
    ];
};

export const loader: LoaderFunction = async () => {
    const emails = await getEmails();
    return Response.json({emails});
};

export default function Index() {
    const {emails}: {emails: Email[]} = useLoaderData();

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-16">
                <header className="flex flex-col items-center gap-9">
                    <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Welcome to GioMail
                    </h1>
                </header>
                <p className="leading-6 text-gray-700 dark:text-gray-200">
                    <EmailList emails={emails} />
                </p>
            </div>
        </div>
    );
}
