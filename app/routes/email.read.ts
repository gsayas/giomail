import { markAsRead } from "~/lib/db/email";

export const action = async ({ request }: { request: Request }) => {
    const { emailId } = await request.json();

    try {
        const updatedEmail = await markAsRead(emailId);
        return Response.json({ success: true, email: updatedEmail });
    } catch (error: unknown) {
        return Response.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
};