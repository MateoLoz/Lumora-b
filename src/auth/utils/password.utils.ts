import bcrypt from 'bcryptjs'

export function checkPassword(plainPassword : string, hashedPassword : string ) : Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);

}