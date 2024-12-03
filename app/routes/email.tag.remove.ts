import { deleteEmailTagUseCase } from "~/usecases/tag/deleteEmailTagUseCase";

export const action = async ({ request }: { request: Request }) => {
    const { emailId, tagId } = await request.json();

    try {
        const updatedEmail = await deleteEmailTagUseCase(emailId, tagId);
        return Response.json({ success: true, email: updatedEmail });
    } catch (error: unknown) {
        return Response.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
};