import type {MetaFunction} from "@remix-run/node";
import {
    LoaderFunction
} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import {getEmailsUseCase} from "~/usecases/email/getEmailsUseCase";
import EmailList from "~/components/email/list/EmailList";
import type {Email} from "~/lib/types";

export const meta: MetaFunction = () => {
    return [
        {title: "GioMail"},
        {name: "description", content: "GioMail - A Simple Email Client"},
    ];
};

export const loader: LoaderFunction = async () => {
    const emails = await getEmailsUseCase();
    return Response.json({emails});
};

export default function Index() {
    const {emails}: { emails: Email[] } = useLoaderData();

    return (
        <div className="flex h-screen w-screen p-4">
            <EmailList emails={emails}/>
        </div>
    );
}
