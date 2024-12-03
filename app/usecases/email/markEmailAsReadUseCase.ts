import {markAsRead} from "~/repositories/email/setEmailStatusRepository";

export async function markEmailAsReadUseCase(emailId: number) {
    return markAsRead(emailId);
}