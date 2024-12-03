import {addTagToEmail} from "~/repositories/tag/addEmailTagRepository";

export async function addEmailTagUseCase(emailId: number, tagName: string) {
    return addTagToEmail(emailId, tagName);
}