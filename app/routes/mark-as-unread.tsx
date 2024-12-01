import {markAsUnread} from "~/lib/emails.server";

export const action = async ({ request }: {request: Request}) => {
    const { emailId } = await request.json();

    await markAsUnread(Number(emailId));

    return Response.json({ success: true });
};