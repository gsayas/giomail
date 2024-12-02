import {markAsUnread} from "~/lib/db/email";

export const action = async ({ request }: {request: Request}) => {
    const { emailId } = await request.json();

    await markAsUnread(Number(emailId));

    return Response.json({ success: true });
};