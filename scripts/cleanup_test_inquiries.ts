/**
 * One-off cleanup: remove test inquiries created while verifying the
 * contact form delivery flow, so the studio's records start clean.
 * Run: bun scripts/cleanup_test_inquiries.ts  (from project root)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const deleted = await prisma.inquiry.deleteMany({
    where: { email: "studiotest@example.com" },
  });
  console.log(`Deleted ${deleted.count} test inquiry row(s).`);
  const remaining = await prisma.inquiry.count();
  console.log(`Inquiries remaining in database: ${remaining}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
