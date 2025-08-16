import bcrypt from "bcryptjs";

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

// Script ejecutable desde CLI
if (require.main === module) {
  (async () => {
    const password = process.argv[2]; // pasar la password como argumento

    if (!password) {
      console.log("Uso: ts-node src/utils/encryptPassword.ts <password>");
      process.exit(1);
    }

    const hash = await hashPassword(password);
    console.log("Password:", password);
    console.log("Hash:", hash);
  })();
}
