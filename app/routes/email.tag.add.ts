import { addEmailTagUseCase } from '~/usecases/tag/addEmailTagUseCase';

export const action = async ({ request }: { request: Request }) => {
    const { emailId, tagName } = await request.json();

    try {
        const updatedEmail = await addEmailTagUseCase(emailId, tagName);
        return Response.json({ success: true, email: updatedEmail });
    } catch (error: unknown) {
        return Response.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
};