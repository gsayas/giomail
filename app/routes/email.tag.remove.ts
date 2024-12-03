import { removeTagFromEmail } from "~/lib/db/tag";

export const action = async ({ request }: { request: Request }) => {
    const { emailId, tagId } = await request.json();

    try {
        const updatedEmail = await removeTagFromEmail(emailId, tagId);
        return Response.json({ success: true, email: updatedEmail });
    } catch (error: unknown) {
        return Response.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
};