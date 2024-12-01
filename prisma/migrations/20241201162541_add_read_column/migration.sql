-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "sender" TEXT NOT NULL DEFAULT 'anonymous',
    "body" TEXT NOT NULL DEFAULT '',
    "read" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Email" ("body", "id", "sender", "subject") SELECT "body", "id", "sender", "subject" FROM "Email";
DROP TABLE "Email";
ALTER TABLE "new_Email" RENAME TO "Email";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
