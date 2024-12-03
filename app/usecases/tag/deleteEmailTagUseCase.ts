import {removeTagFromEmail} from "~/repositories/tag/deleteEmailTagRepository";

export async function deleteEmailTagUseCase(emailId: number, tagId: number) {
    return removeTagFromEmail(emailId, tagId);
}