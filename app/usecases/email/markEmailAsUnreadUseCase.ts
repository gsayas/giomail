import {markAsUnread} from "~/repositories/email/setEmailStatusRepository";

export async function markEmailAsUnreadUseCase(emailId: number) {
    return markAsUnread(emailId);
}