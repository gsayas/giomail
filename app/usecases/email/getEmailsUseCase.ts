import getEmails from "~/repositories/email/getEmailsRepository";

export async function getEmailsUseCase() {
    return getEmails();
}