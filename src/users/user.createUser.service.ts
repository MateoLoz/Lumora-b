import { ConflictError } from "../utils/errors";
import { hashPassword } from "../utils/encriptpassword";
import { getUserByEmail, getUserByName, createUser } from "../users/users.service";
import { toUsersCreatedDTO } from "../users/users.mapper";
import { CreateUser } from "../validators/users.validator";

export async function createUserService(payload: CreateUser) {

  if (await getUserByEmail(payload)) {
    throw new ConflictError(`Email ${payload.email} already in use`, 'EMAIL_IN_USE', 409);
  }

  if (await getUserByName(payload)) {
    throw new ConflictError(`Username ${payload.user_name} already in use`,'USERNAME_IN_USE', 409);
  }


  payload.password = hashPassword(payload.password);


  const user = await createUser(payload);

  return toUsersCreatedDTO(user);
}
